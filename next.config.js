const nextCss = require('@zeit/next-css')
const nextLess = require('@zeit/next-less')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = nextCss({
  ...nextLess({
    cssModules: true,
    cssLoaderOptions: {
      excludePaths: ['node_modules']
    },
    lessLoaderOptions: {
    },
    webpack(config, options) {
      return config
    }
  }),
  cssModules: false
})