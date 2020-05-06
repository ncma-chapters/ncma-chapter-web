/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Node modules.
const axios = require('axios');
const crypto = require('crypto');
const path = require('path');

exports.sourceNodes = async ({ boundActionCreators }) => {
  const { createNode } = boundActionCreators;

  const response = await axios(`http://localhost:3000/events`);
  const events = response.data.data;

  events.forEach((event) => {
    const eventNode = {
      // Required fields.
      id: event.id,
      parent: '__SOURCE__',
      internal: {
        type: 'Event',
      },
      children: [],
      // Other fields.
      ...event.attributes,
    };

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(eventNode))
      .digest(`hex`);

    // Add it to the event node.
    eventNode.internal.contentDigest = contentDigest;

    // Create the node.
    createNode(eventNode);
  });
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Create event detail pages.
  createPage({
    path: '/events/:eventID',
    matchPath: '/events/:eventID',
    component: path.resolve('./src/templates/Event/index.js'),
  });
};
