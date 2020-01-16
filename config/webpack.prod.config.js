const path = require('path')
const merge = require('webpack-merge')
const commenConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(src) {
  return path.resolve(__dirname, '..', src)
}

module.exports = merge(commenConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/',
    path: resolve('./dist'),
    filename: 'bundle-[name]-[hash:5].js',
    chunkFilename: '[name]-[hash].js'
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash:5].css',
      chunkFilename: '[id]-[hash:5].css'
    })
  ]
})