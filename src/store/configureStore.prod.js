import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

const configureStore = (proloadedState) => {
  const store = createStore(
    rootReducer,
    proloadedState,
    applyMiddleware(
      thunk,
      promiseMiddleware(),
    )
  )
  return store
}

export default configureStore
