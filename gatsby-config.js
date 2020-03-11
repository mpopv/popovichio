const siteMetadata = {
  title: `Matt Popovich`,
  description: `My personal site`,
  author: `Matt Popovich`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
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
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'DYYWXVHI',
        whitelistHostnames: ['popovich.io'],
      },
    },
  ],
};
