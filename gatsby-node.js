/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Node modules.
const axios = require('axios');
const crypto = require('crypto');
const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Events implements Node {
      name: String
      description: String
      capacity: Int
      venueId: String
      startingAt: String
    }

    interface Address {
      city: String
      state: String
      street: String
      street2: String
      zip: Int
    }

    type Venues implements Node {
      address: Address
      relationships: [Events]
    }

    interface Price {
      currency: String
      display: String
      value: Float
    }

    type TicketClasses implements Node {
      name: String
      price: Price
      relationships: [Events]
    }
  `;
  createTypes(typeDefs);
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const response = await axios(
    `${process.env.GATSBY_API_URL || 'http://localhost:3000'}/events?include=venue,ticketClasses`,
  );

  // Create events.
  const { data: events } = response.data;
  if (events) {
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
  }

  // Create all other entities.
  const { included } = response.data;
  if (included) {
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
  }
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const response = await axios(
    `${process.env.GATSBY_API_URL || 'http://localhost:3000'}/events?include=venue,ticketClasses`,
  );
  const { data: events } = response.data;

  // Create event detail pages.
  if (events) {
    events.forEach((event) => {
      createPage({
        path: `/events/${event.id}`,
        component: path.resolve('./src/templates/Event/index.js'),
      });
    });
  }
};
