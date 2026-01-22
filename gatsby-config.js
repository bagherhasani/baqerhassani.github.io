module.exports = {
  // GitHub Pages project site lives under /portfolio
  pathPrefix: `/portfolio`,
  siteMetadata: {
    title: `Baqer Hassani`,
    description: `Here is my personal website`,
    author: `Baqer Hassani`,
  },
  // Add development-specific configuration
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Baqer Hassani`,
        short_name: `Baqer`,
        // Must match pathPrefix for GitHub Pages project site
        start_url: `/portfolio/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/GoosePhoto.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // Use environment variable for security
        trackingId: process.env.GATSBY_GA_MEASUREMENT_ID,
        head: false,
        anonymize: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
