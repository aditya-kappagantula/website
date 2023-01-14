exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

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
      subMenu: [SubMenu] @defaultArray
    }
    type SubMenu {
      name: String
      link: String
    }
  `;
  createTypes(typeDefs);
};