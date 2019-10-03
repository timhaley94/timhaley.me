module.exports = {
  siteMetadata: {
    title: `Timothy Haley | Software Engineer`,
    description: ``,
    author: `@timhaley94`,
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
        name: `Tim Haley | Software Engineer`,
        short_name: `tim`,
        start_url: `/`,
        background_color: `#37d48d`,
        theme_color: `#37d48d`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`400`, `700`]
          },
          {
            family: `Bitter`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
  ],
}
