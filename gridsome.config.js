// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Gridsome + Shopify 😍Gridsome & Shopify Headless Ecommerce Site Building',
  siteUrl: 'https://gridsomify.com',
  siteDescription: 'Gridsomify provides Gridsome Shopify headless ecommerce site building, deployment and integration services. - Gridsome + Shopify 😍',
  titleTemplate: '%s - Gridsome + Shopify',
  icon: {
    favicon: "./src/favicon.png",
    touchicon: "./src/favicon.png"
  },
  templates: {
    ShopifyProduct: [
      {
        path: '/product/:handle',
        component: './src/templates/Product.vue'
      }
    ],
    ShopifyCollection: [
      {
        path: '/collection/:handle',
        component: './src/templates/Collection.vue'
      }
    ]
  },
  plugins: [
    'gridsome-plugin-robots',
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
          title: 'Gridsome + Shopify 😍Gridsome & Shopify Headless Ecommerce Site Builder',
          description: 'Gridsomify provides Gridsome Shopify headless ecommerce site building, deployment and integration services. - Gridsome + Shopify 😍',// Optional
          startUrl: '/',
          display: 'standalone',
          gcm_sender_id: undefined,
          statusBarStyle: 'default',
          manifestPath: 'manifest.json',
          disableServiceWorker: false,
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
          shortName: 'Gridsomify!',
          themeColor: '#000000',
          lang: "en-US",
          backgroundColor: '#000000',
          icon: './src/favicon.png', // must be provided like 'src/favicon.png'
          msTileImage: 'Gridsomify!',
          msTileColor: '#000000'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/exclude-me'],
        config: {
          '/collections/*': {
            changefreq: 'daily',
            priority: 0.5
          },
          '/product/*': {
            changefreq: 'daily',
            priority: 0.5
          }
        }
      }
    },
    {
      use: 'gridsome-source-shopify',
      options: {
        storeName: process.env.GRIDSOME_SHOPIFY_STOREFRONT,
        storefrontToken: process.env.GRIDSOME_SHOPIFY_STOREFRONT_TOKEN
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-169269904-1'
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        flexsearch: {
          profile: 'match'
        },
        collections: [
          {
            typeName: 'ShopifyProduct',
            indexName: 'Product',
            fields: ['title', 'handle', 'description']
          },
          {
            typeName: 'ShopifyCollection',
            indexName: 'Collection',
            fields: ['title', 'handle', 'description']
          }
        ],
        searchFields: ['title', 'handle', 'tags']
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
}
