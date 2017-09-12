import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import app from './reducers'

export default function configureStore() {
  let middlewares = [ thunk ]
  middlewares.push(createLogger({}))

  return new Promise((resolve, reject) => {
    try {
      const store = createStore(
        app,
        undefined,
        compose(
          applyMiddleware(...middlewares),
        )
      )

      resolve(store)

    } catch (e) {
      reject(e)
    }
  })
}
