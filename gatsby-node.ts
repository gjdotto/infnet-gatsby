import path from "path";
import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;
  const result: any = await graphql(`
    query GetTotalCount {
      allMarkdownRemark {
        totalCount
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const destinosCount = result.data.allMarkdownRemark.totalCount;
  const destinosPerPage = 9;
  const numPages = Math.ceil(destinosCount / destinosPerPage);
  for (let index = 0; index < numPages; index++) {
    createPage({
      path: `/pages/${index + 1}`,
      component: path.resolve("./src/templates/FeedPage.tsx"),
      context: {
        limit: destinosPerPage,
        skip: index * destinosPerPage,
      },
    });
  }
};

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  actions,
  getNode,
  node,
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({
      getNode,
      node,
      trailingSlash: false,
    }).slice(1);
    createNodeField({
      name: "slug",
      value,
      node,
    });
  }
};
