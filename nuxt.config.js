const nodeExternals = require('webpack-node-externals');

const path = require('path');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'booklist',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'element-ui',
      'vue-awesome'
    ],
    extend (config, { isServer }) {
      if (isServer) {
        config.externals = [
          nodeExternals({
            // default value for `whitelist` is
            // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ];
      }
    }
  },

  plugins: [
    '~/plugins/element-ui.js',
    '~/plugins/fa.js'
  ],

  rootDir: path.resolve(__dirname),

  dev: process.env.NODE_ENV !== 'production',

  css: [
    '~/assets/css/main.scss'
  ]
};
