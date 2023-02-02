module.exports = {
  siteMetadata: {
    title: `website`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `This is a personal website.`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
        icon: `home`
      },
      {
        name: `About`,
        link: `/about`,
        icon: `about`,
      },
      {
        name: `Blog`,
        link: `/blog`,
        icon: `blog`,
      },
      {
        name: `Tags`,
        link: `/tags`,
        icon: `tag`,
      },
      {
        name: `Finance`,
        link: `/tags/finance`,
        icon: `money`,
      },
      {
        name: `Life`,
        link: `/tags/life`,
        icon: `life`,
      },
      {
        name: `Programming`,
        link: `/tags/programming`,
        icon: `programming`,
      },
      {
        name: `Misc`,
        link: `/tags/misc`,
        icon: `misc`,
      },
      // {
      //   name: `Contact`,
      //   link: `/page-2`,
      //   subMenu: [
      //     {
      //       name: `Sub 1`,
      //       link: `/sub-1`,
      //     },
      //     {
      //       name: `Sub 2`,
      //       link: `/sub-2`,
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `The Cool Application`,
        short_name: `Cool App`,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        cache_busting_mode: 'none',
        theme_color_in_head: false, 
      },
    }, 
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['**/src/images/icon.png']
        }
      }
    },
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-google-gtag", 
    "gatsby-plugin-image", 
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp", 
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1200,
            },
          },
        ],
      },
    },
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
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          `gatsby-remark-autolink-headers`,
          // 'gatsby-remark-prismjs-copy-button',
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              aliases: {},
              showLineNumbers: false,
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            }
          },
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
        useBorderBox: true,
        useLocalStorage: true,
        useRootStyles: true,
      },
    },
  ]
};