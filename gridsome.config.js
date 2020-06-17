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
      use: 'gridsome-plugin-tailwindcss',
      options: {
        purgeConfig: {
          content: [
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.html',
            './src/**/*.pug',
            './src/**/*.md',
            './blog/**/*.md',
          ],
          whitelist: [
            'body',
            'html',
            'img',
            'a',
            'g-image',
            'g-image--lazy',
            'g-image--loaded',
            'active',
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Algo Crypto Trading Blog',
          feed_url: 'https://algocryptotrading.com/rss.xml',
          site_url: 'https://algocryptotrading.com/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'https://algocryptotrading.com' + node.path,
          author: 'Herve Fulchiron',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
  ],
  templates: {
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
      ],
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
}
