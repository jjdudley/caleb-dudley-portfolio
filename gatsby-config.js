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
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: 'njx7xme',
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/caleb-dudley-favicon.png`, 
      },
      
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          // Cache fonts forever
          '/fonts/*': [
            'Cache-Control: public',
            'Cache-Control: max-age=365000000',
            'Cache-Control: immutable'
          ],
          // Cache images for a week
          '/images/*': [
            'Cache-Control: public',
            'Cache-Control: max-age=604800'
          ]
        }
      }
    }
  ],
}



