const path = require("path")
const _ = require("lodash")
const tags = []

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  if (page?.context?.__params?.frontmatter__tags?.split('-').length > 1) {
    deletePage(page)
  }
  if (page.path.match(/^\/tags/)) {
    if (Array.isArray(page.context.frontmatter__tags)) {
      page.context.frontmatter__tags.forEach(tag => {
        if (!tags[tag]) {
          tags.push(tag)
          createPage({ ...page, context: {tag}, path: `/tags/${tag}/` })
        }
      })
    }
  }

  if (page.path.match(/special-page/)) {
    page.context.layout = "special"
    createPage(page)
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions;
  createFieldExtension({
    name: `defaultArray`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return [];
          }
          return source[info.fieldName];
        },
      };
    },
  });
  const typeDefs = `
    type Site implements Node {
      siteMetadata: SiteMetadata
    }
    type SiteMetadata {
      title: String!
      siteUrl: String!
      description:  String!
      menuLinks: [MenuLinks]!
    }
    type MenuLinks {
      name: String!
      link: String!
      icon: String!
      subMenu: [SubMenu] @defaultArray
    }
    type SubMenu {
      name: String
      link: String
      icon: String
    }
  `;
  createTypes(typeDefs);
};
