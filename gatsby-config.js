/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/nabrosok",
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          "@data": "src/data",
          "@pages": "src/pages",
          "@shared": "src/shared",
          "@ui": "src/ui",
        },
        extensions: [
          "js", "jsx", "ts", "tsx"
        ],
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300,400,500`
        ],
        display: 'swap'
      }
    }
  ],
}
