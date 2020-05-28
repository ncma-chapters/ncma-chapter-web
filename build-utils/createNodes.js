// Node modules.
const crypto = require('crypto');

const createEntityNode = (entity, createNode) => {
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
};

module.exports = {
  createEntityNode,
};
