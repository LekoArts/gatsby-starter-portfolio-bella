const path = require('path');

exports.createPages = async ({ reporter, graphql, actions }) => {
  const { createPage } = actions;
  const caseStudyTemplate = path.resolve('src/templates/case.jsx');

  const pages = await graphql(`
    {
      posts: allPrismicCaseStudy {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  pages.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/projects/${node.uid}`,
      component: caseStudyTemplate,
      context: {
        uid: node.uid,
      },
    });
  });
};
