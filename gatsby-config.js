/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    name: `Muhammadathar.com`,
    title: `Muhammad Athar`,
    description: `Personal Website`,
    siteUrl: `https://www.muhammadathar.com`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    "gatsby-plugin-tslint",
    `gatsby-plugin-styled-components`,
  ],
}
