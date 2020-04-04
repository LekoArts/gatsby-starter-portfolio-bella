const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
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
      path: `/CaseStudy/${node.uid}`,
      component: caseStudyTemplate,
      context: {
        uid: node.uid,
      },
    });
  });
};
