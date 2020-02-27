module.exports = {
  siteMetadata: {
    title: `Matt Popovich`,
    description: `My personal site`,
    author: `Matt Popovich`,
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
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Popovich`,
        short_name: `Popovich.io`,
        start_url: `/`,
        background_color: `#00222E`,
        theme_color: `#FFA043`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
