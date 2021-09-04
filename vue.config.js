const { resolve } = require('path')

const resolvePath = filePath => resolve(__dirname, filePath)

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "src/assets/style/var.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@assets', resolvePath('src/assets'))
      .set('@components', resolvePath('src/components'))
      .set('@router', resolvePath('src/router'))
      .set('@store', resolvePath('src/store'))
      .set('@views', resolvePath('src/views'))
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex'
    }
  }
}
