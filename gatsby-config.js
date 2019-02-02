const postcssPresetEnv = require(`postcss-preset-env`)
const rucksack = require(`rucksack-css`)
const center = require(`postcss-center`)
const alias = require(`postcss-alias`)
const short = require(`postcss-short`)

module.exports = {
  siteMetadata: {
    title: 'Springfield Railway Hub',
    siteUrl: `https://springfieldrailwayhub.nz/`,
    
    description:
      "Springfield Railway Station, King St, Springfield 7681. Cafe, Groceries and Collectibles.",
    url: "https://springfieldrailwayhub.nz", // No trailing slash allowed!
    image: "/preview.png", // Path to your image you placed in the 'static' folder
    facebook: '73connection',
    ogLanguage: 'en_US',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    //'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          rucksack(),
          center(),
          alias(),
          short(),
          postcssPresetEnv({
            stage: 0,
          }),
        ]
        // precision: 8,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
