/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `website`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `This is a personal website.`,
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
      },
      {
        name: `Page 2`,
        link: `/page-2`,
        subMenu: [
          {
            name: `Sub 1`,
            link: `/sub-1`,
          },
          {
            name: `Sub 2`,
            link: `/sub-2`,
          },
        ],
      },
      {
        name: `Page 3`,
        link: `/page-3`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-google-gtag", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      },
    }, 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "staticImages",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: `${__dirname}/src/content`,
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.jsx`),
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: "@theme-ui/preset-funk",
      },
    },
  ]
};