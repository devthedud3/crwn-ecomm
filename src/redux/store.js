import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import rootReducer from './root.reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const midWare = [thunk];

if (process.env.NODE_ENV === 'development') {
  midWare.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...midWare));
export const persister = persistStore(store);
