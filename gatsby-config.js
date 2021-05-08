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
    }
  ],
}
