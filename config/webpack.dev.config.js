const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const commenConfig = require('./webpack.base.config.js')

function resolve(src) {
  return path.resolve(__dirname, '..', src)
}

module.exports = merge(commenConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?noInfo=true&reload=true',
    resolve('./src/index.js')
  ],
  output: {
    path: resolve('./dist'),
    filename: 'bundle-[name]-[hash:5].js',
    chunkFilename: '[name]-[hash:5].js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    open: true,
    contentBase: resolve('./dist'),
    historyApiFallback: true,
    proxy: {}
  }
})