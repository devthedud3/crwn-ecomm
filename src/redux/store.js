import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import rootReducer from './root.reducer';
import { persistStore } from 'redux-persist';

const midWare = [logger];

export const store = createStore(rootReducer, applyMiddleware(...midWare));
export const persister = persistStore(store);
