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
          resolve: `gatsby-plugin-feed`,
          options: {
            query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                    site_url: siteUrl
                  }
                }
              }
            `,
            feeds: [
              {
                serialize: ({ query: { site, allMarkdownRemark } }) => {
                  return allMarkdownRemark.edges.map(edge => {
                    return Object.assign({}, edge.node.frontmatter, {
                      description: edge.node.excerpt,
                      date: edge.node.frontmatter.date,
                      url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                      guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                      custom_elements: [{ "content:encoded": edge.node.html }],
                    })
                  })
                },
                query: `
                  {
                    allMarkdownRemark(
                      sort: { order: DESC, fields: [frontmatter___date] },
                    ) {
                      edges {
                        node {
                          excerpt
                          html
                          fields { slug }
                          frontmatter {
                            title
                            date
                          }
                        }
                      }
                    }
                  }
                `,
                output: "/rss.xml",
                title: "Charlie Chapman"
              },
            ],
          },
        },
        {
          resolve: `gatsby-plugin-favicon`,
          options: {
            logo: "./src/images/favicon.png",
            injectHTML: true,
            icons: {
              android: true,
              appleIcon: true,
              appleStartup: true,
              coast: true,
              favicons: true,
              firefox: true,
              twitter: true,
              yandex: true,
              windows: true
            }
          }
        },
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            trackingId: "UA-130520786-1",
            head: true
          },
        }
      ],
};