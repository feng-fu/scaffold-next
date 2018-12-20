import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import canvas from './canvas'

const reducers = combineReducers({ canvas })

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(logger, ...middleware))
  }
  return applyMiddleware(...middleware)
}

export function initializeStore(initialState = { canvas: { layers: [] } }) {
  return createStore(reducers, initialState, bindMiddleware([]))
}
