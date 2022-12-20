module.exports = {
  siteMetadata: {
    title: `Zantier Odontología`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    //   {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     // "url": ""
    //   }
    // },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 100,
      },
      __key: "images",
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

    "gatsby-plugin-emotion",

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "G-YG7S9JMD29",
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     trackingIds: [
    //       "G-YG7S9JMD29", // Google Analytics / GA
    //     ],
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: true,
    //     },
    //   },
    // },

    {
      resolve: `gatsby-plugin-hubspot`,
      options: {
        trackingCode: "19524537",
        respectDNT: true,
        productionOnly: true,
      },
    },
  ],
};
