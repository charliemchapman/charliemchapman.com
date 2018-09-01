module.exports = {
    siteMetadata: {
        title: `Charlie Chapman`,
        description: `The personal blog of Charlie Chapman`,
        siteUrl: `https://charliemchapman.com`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src`,
          },
        },
        {
          resolve: `gatsby-plugin-typography`,
          options: {
            pathToConfigModule: `src/utils/typography.js`,
          },
        },
        {
          resolve: 'gatsby-plugin-web-font-loader',
          options: {
            google: {
              families: ['Montserrat']
            }
          }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
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
                  maxWidth: 750,
                  showCaptions: false
                },
              },
              {
                resolve: `gatsby-remark-prismjs`,
                options: {
                  classPrefix: "language-",
                  inlineCodeMarker: null,
                  aliases: {},
                },
              },
            ],
          },
        },
        {
          resolve: `gatsby-plugin-feed`
        }
      ],
};