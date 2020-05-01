import { createStore, applyMiddleware } from 'redux';
import createMiddlewareSaga from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducers from './reducers';
import rootSagas from './sagas';

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const sagaMiddleware = createMiddlewareSaga();
let middleware = [ sagaMiddleware ];

if (isDevelopment) {
  middleware = [ ...middleware, createLogger() ];
}

const store = createStore(rootReducers, applyMiddleware(...middleware));
sagaMiddleware.run(rootSagas);

export default store;
