/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Node modules.
const axios = require('axios');
const crypto = require('crypto');
const path = require('path');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const response = await axios(`${process.env.API_URL || 'http://localhost:3000'}/events?include=venue,ticketClasses`);

  // Create events.
  const events = response.data.data;
  events.forEach((event) => {
    const eventNode = {
      // Required fields.
      id: event.id,
      parent: '__SOURCE__',
      internal: {
        type: event.type,
      },
      children: [],
      // Other fields.
      ...event.attributes,
      relationships: event.relationships,
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

  // Create all other entities.
  const { included } = response.data;
  included.forEach((entity) => {
    const entityNode = {
      // Required fields.
      id: entity.id,
      parent: '__SOURCE__',
      internal: {
        type: entity.type,
      },
      children: [],
      // Other fields.
      ...entity.attributes,
      relationships: entity.relationships,
    };

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(entityNode))
      .digest(`hex`);

    // Add it to the event node.
    entityNode.internal.contentDigest = contentDigest;

    // Create the node.
    createNode(entityNode);
  });
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const response = await axios(`${process.env.API_URL || 'http://localhost:3000'}/events?include=venue,ticketClasses`);
  const events = response.data.data;

  // Create event detail pages.
  events.forEach((event) => {
    createPage({
      path: `/events/${event.id}`,
      component: path.resolve('./src/templates/Event/index.js'),
    });
  });
};
