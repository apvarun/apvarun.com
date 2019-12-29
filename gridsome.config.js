// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Frontend Engineer - Amsterdam',
  author: 'Varun A P',
  siteDescription: 'Frontend JavaScript Engineer from Amsterdam building things for the web.',
  siteUrl: 'https://apvarun.com',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./blog",
        pathPrefix: "/blog",
        path: "**/*.md",
        typeName: "Post",
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-107275690-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
        }
      }
    },
    {
      use: 'gridsome-plugin-feed',
      options: {
        // Required: array of `GraphQL` type names you wish to include
        contentTypes: ['Post'],
        feedOptions: {
          title: 'Varun A P - Frontend Developer - Bangalore',
          description: 'Frontend JavaScript Developer from Bangalore building things for the web.'
        },
        rss: {
          enabled: true,
          output: '/rss.xml'
        },
        maxItems: 25,
        htmlFields: ['content'],
        // Optional: a method that accepts a node and returns an object for `Feed.addItem()`
        // See https://www.npmjs.com/package/feed#example for available properties
        // NOTE: `date` field MUST be a Javascript `Date` object
        nodeToFeedItem: (node) => ({
          title: node.title,
          excerpt: node.excerpt,
          content: node.content
        })
      }
    }
  ],
  transformers: {
    remark: {
      excerpt: true,
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
