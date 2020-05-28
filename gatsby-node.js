/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Node modules.
const axios = require('axios');
const path = require('path');
// Relative imports.
const stubbedEventsResponse = require('./build-utils/stubbedEventsResponse.json');
const { createEntityNode } = require('./build-utils/createNodes');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  // Fetch all events.
  let response = await axios(
    `${process.env.GATSBY_API_URL || 'http://localhost:3000'}/events?include=venue,ticketClasses`,
  );

  // No events? Mock them so GraphQL doesn't freak out.
  const events = response.data.data;
  if (!events) {
    response = { data: stubbedEventsResponse };
  }

  // Create events.
  events.forEach((event) => {
    event.attributes.fake = event.attributes.fake || false;
    createEntityNode(event, createNode);
  });

  // Create all other entities.
  const { included } = response.data;
  if (included) {
    included.forEach((entity) => {
      createEntityNode(entity, createNode);
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Fetch our events.
  const result = await graphql(`
    {
      allEvents {
        nodes {
          fake
          id
        }
      }
    }
  `);

  // Throw any errors.
  if (result.errors) {
    throw result.errors;
  }

  // Create event detail pages.
  const { nodes: events } = result.data.allEvents;
  if (events) {
    events.forEach((event) => {
      if (!event.fake) {
        console.log('Creating event detail page:', event);
        createPage({
          path: `/events/${event.id}`,
          component: path.resolve('./src/templates/Event/index.js'),
        });
      }
    });
  }
};
