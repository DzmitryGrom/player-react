import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

export default () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
};
