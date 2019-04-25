/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middlewares = [thunk];

const enhancers = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const store = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers,
    ),
  );
};

export default store;
