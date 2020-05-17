const path = require('path')
const http = require('http')
const express = require('express')

const webpack = require('webpack')
const config = require('./webpack.dev.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

// mock数据
const map = require('../mock/map');
const loan = require('../mock/loan');
const userConver = require('../mock/userConver');
const product = require('../mock/product');
const cooperator = require('../mock/cooperator');
const equipment = require('../mock/equipment');

// 编译器，编译器执行一次就会重新打包一下代码
const complier = webpack(config)
// express实列
const app = express()
// 服务
const server = http.createServer(app)
// socket
const io = require('socket.io')(server);

// const port = parseInt(process.env.PORT, 10) || 8586;
// const host = process.env.HOST || 'localhost';

//devServer
const devMiddleware = webpackDevMiddleware(complier, {
  quiet: true,
  noInfo: true,
  stats: 'minimal'
})
// 热更新
const hotMiddleware = webpackHotMiddleware(complier, {
  log: false,
  heartbeat: 500
})

app.use(devMiddleware)
app.use(hotMiddleware)
// 设置访问静态文件的路径
app.use(express.static(path.resolve(__dirname, '../dist')))

let t = null;
io.on('connection', socket => {
  socket.on('msg', () => {
    socket.emit('message', {
      contentType: 'msg',
      data: map(),
    });

    if (t) {
      clearInterval(t);
      t = null;
    }

    t = setInterval(() => {
      socket.emit('message', {
        contentType: 'msg',
        data: map(),
      });
    }, 5000);
  });

  socket.on('loan', () => {
    socket.emit('message', {
      contentType: 'loan',
      data: loan(),
    });
  });

  socket.on('userConver', () => {
    socket.emit('message', {
      contentType: 'userConver',
      data: userConver(),
    });
  });

  socket.on('product', () => {
    socket.emit('message', {
      contentType: 'product',
      data: product(),
    });
  });

  socket.on('cooperator', () => {
    socket.emit('message', {
      contentType: 'cooperator',
      data: cooperator(),
    });
  });

  socket.on('equipment', () => {
    socket.emit('message', {
      contentType: 'equipment',
      data: equipment(),
    });
  });
});

io.on('disconnect', () => {
  console.log('disconnect');
  if (t) {
    clearInterval(t);
    t = null;
  }
});

server.listen(3000, () => console.log('server is running at 3000'))