const path = require('path')
const http = require('http')
const express = require('express')

const webpack = require('webpack')
const config = require('./webpack.dev.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const complier = webpack(config)
const app = express()
const server = http.createServer(app)

const devMiddleware = webpackDevMiddleware(complier, {
  quiet: true,
  noInfo: true,
  stats: 'minimal'
})

const hotMiddleware = webpackHotMiddleware(complier, {
  log: false,
  heartbeat: 500
})

app.use(devMiddleware)
app.use(hotMiddleware)
app.use(express.static(path.resolve(__dirname, '../dist')))

server.listen(3000, () => console.log('server is running at 3000'))