import React from 'react'
import ReactDOM from 'react-dom'
/* 热更新 */
import { AppContainer } from 'react-hot-loader'
/* 包裹在最外层以提供router功能*/
import { BrowserRouter as Router } from 'react-router-dom'
/* 包裹在最外层以提供store功能*/
import { Provider } from 'react-redux'
/* socket.io */
import { socket } from './utils/socket';
/* store类别 */
import { SAVE_LOAN, SAVE_MAP } from './store/types';
/* 创建路由 */
import Route from './router'
import configStore from './store'
/* 全局样式 */
import 'assets/css/global.scss'

const store = configStore()

/* 配置socket */
socket.init({
  wsHost: '/',
  onConn: () => {
    socket.wsEmit({ name: 'msg' });
    socket.wsEmit({ name: 'loan' });
    socket.wsEmit({ name: 'userConver' });
    socket.wsEmit({ name: 'product' });
    socket.wsEmit({ name: 'cooperator' });
    socket.wsEmit({ name: 'equipment' });
  },
  onReceiveMsg: data => {
    const contentTypeMap = {
      msg: SAVE_MAP,
      loan: SAVE_LOAN,
      userConver: SAVE_LOAN,
      product: SAVE_LOAN,
      cooperator: SAVE_LOAN,
      equipment: SAVE_LOAN,
    };

    const action = contentTypeMap[data.contentType];

    if (action) {
      store.dispatch({ type: action, payload: { ...data.data } });
    } else {
      console.error(`ws resp ${data.contentType} not match...`);
    }
  },
  onDisconn() { },
});

socket.initWs();

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

/* 初始化 */
render(Route)

/* 热更新 */
if (module.hot) {
  module.hot.accept('./router', () => {
    render(Route)
  })
}