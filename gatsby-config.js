/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    // {
    //   resolve: "gatsby-transformer-remark",
    //   // options: {
    //   //   // plugins: [
    //   //   //   {
    //   //   //     resolve: "gatsby-remark-images-grid",
    //   //   //     options: {
    //   //   //       className: "myCustomClassName",
    //   //   //       gridGap: "20px",
    //   //   //       margin: "20px auto",
    //   //   //     },
    //   //   //   },
    //   //   // ],
    //   // },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `analog`,
        path: `${__dirname}/src/analog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `analog-md`,
        path: `${__dirname}/src/markdown/analog-markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `digital-md`,
        path: `${__dirname}/src/markdown/digital-markdown`,
      },
    },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        injectPageProps: false,
      },
    },
    "gatsby-source-instance-name-for-remark",
  ],
}



