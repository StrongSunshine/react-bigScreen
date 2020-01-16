const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

function resolve(src) {
  return path.resolve(__dirname, '..', src)
}

module.exports = {
  entry: resolve('./src'),
  output: {
    path: resolve('./dist')
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.(sc|sa|c)ss$/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]_[hash:base64:5]'
            },
            sourceMap: !isDev && true
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          outputPath: 'images/',
          limit: 5 * 1024
        }
      }
    },
    {
      test: /\.(eot|woff2?|ttf|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]-[hash:5].[ext]',
          limit: 5000,
          publicPath: 'fonts/',
          outputPath: 'fonts/'
        }
      }
    }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackplugin({
      filename: 'index.html',
      template: resolve('./public/index.html'),
      favicon: resolve('./public/favicon.ico'),
      showErrors: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': resolve('./src'),
      'assets': resolve('./src/assets'),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: false
}