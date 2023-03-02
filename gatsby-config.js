module.exports = {
  siteMetadata: {
    title: `Zantier Odontología`,
    siteUrl: `https://zantier.com.do`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-YG7S9JMD29", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          anonymize: true,
          respectDNT: true,
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "310609983759396",
      },
    },

    // {
    //   resolve: `gatsby-plugin-hubspot`,
    //   options: {
    //     trackingCode: "19524537",
    //     respectDNT: true,
    //     productionOnly: true,
    //   },
    // },
  ],
};
