import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Route from './router'

import 'assets/css/global.scss'

function render(Components) {
  ReactDOM.render(
    <AppContainer>
      <Provider >
        <BrowserRouter>
          <Components />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Route)

if (module.hot) {
  module.hot.accept('./router/index.js', () => render(Route))
}