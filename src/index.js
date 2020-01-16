import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Route from './router'
import configStore from './store'

import 'assets/css/global.scss'

const store = configStore()

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Route)

if (module.hot) {
  module.hot.accept('./router', () => {
    render(Route)
  })
}