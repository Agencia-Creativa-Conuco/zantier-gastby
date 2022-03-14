module.exports = {
  siteMetadata: {
      title: `Zantier`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  //   {
  //   resolve: 'gatsby-source-wordpress',
  //   options: {
  //     // "url": ""
  //   }
  // }, 
  "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", 
  "gatsby-plugin-sharp",
  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      defaultQuality: 100,
    },
    __key: 'images',
  },
   "gatsby-transformer-sharp"
  ,    {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  }
  ,"gatsby-plugin-emotion"]
};