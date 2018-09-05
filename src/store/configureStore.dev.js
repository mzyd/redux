import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'

const configureStore = (proloadedState) => {
  const store = createStore(
    rootReducer,
    proloadedState,
    composeWithDevTools(
      applyMiddleware(
        logger,
        thunk,
        promiseMiddleware(),
      )
    ),
  )

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return store
}

export default configureStore
