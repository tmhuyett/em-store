module.exports = {
  siteMetadata: {
    title: 'React & Gatsby shop powered by Snipcart',
    author: "Snipcart's geeks",
    description: "A snipcart's demo using React and Gatsby.",
    siteUrl: 'https://snipcart-react-gatsby.netlify.com/',
  },
  pathPrefix: '/em-store',
  plugins: [

    
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
          version: '3.0.15',
          publicApiKey: 'MjQyZGJhZWItNWZhMi00Njc3LWI2MGYtYWFmYjgwMDhlZmU3NjM3Mzc2MTU4MjUxNTM1Mzg3', // use public api key here or in environment variable
          defaultLang: 'en',
          currency: 'usd',
          openCartOnAdd: false,
          locales: {
            fr: {
              actions: {
                checkout: 'Valider le panier',
              },
            }
          },
          innerHTML: `
          <billing section="bottom">
              <!-- Customization goes here -->
          </billing>`,
      },
  },

  {
    "scripts": {
      "deploy": "gatsby build --prefix-paths && gh-pages -d public"
    }
  }

  
    
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/blog`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
      },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
