import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const midWare = [logger];

const store = createStore(rootReducer, applyMiddleware(...midWare));

export default store;
