module.exports = {
    siteMetadata: {
        title: `Charlie Chapman`,
    },
    plugins: [
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `posts`,
            path: `${__dirname}/src/posts`,
          },
        },
        `gatsby-transformer-remark`,
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
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
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
      ],
};