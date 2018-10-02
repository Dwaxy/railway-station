const postcssPresetEnv = require(`postcss-preset-env`)
const rucksack = require(`rucksack-css`)
const center = require(`postcss-center`)
const alias = require(`postcss-alias`)
const short = require(`postcss-short`)

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        plugins: [],
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
