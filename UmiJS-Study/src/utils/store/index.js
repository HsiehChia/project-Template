import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

const configureStore = () => {
  const logger = createLogger({})

  const middlewares = [thunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionSanitizer: (action) => ({
        ...action,
        type: action.type.toString()
      })
    })
    : compose
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  return createStore(reducers, enhancer)
}

export default configureStore()
