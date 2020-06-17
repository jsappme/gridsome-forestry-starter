// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Algo Crypto Trading',
  siteDescription: 'Algo Crypto Trading services and products',
  siteUrl: 'https://algocryptotrading.com',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  templates: {
  },
  transformers: {
  },
}
