const nextLess = require('@zeit/next-less')

module.exports = nextLess({
  cssModules: true,
  webpack(config, options) {
    return config
  }
})