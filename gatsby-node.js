/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Dependencies
const path = require('path');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Create team member detail pages.
  createPage({
    path: '/about/:teamMemberID',
    matchPath: '/about/:teamMemberID',
    component: path.resolve('./src/templates/TeamMemberDetail/index.js'),
  });
};
