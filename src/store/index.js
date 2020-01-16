import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers'

const composeEnhancers = 
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const middlewares = []

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
)

export default function configStore() {
  return createStore(rootReducer, enhancer)
}