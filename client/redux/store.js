import { createStore, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';
import rootReducer from './rootreducer';

const store = createStore(rootReducer, applyMiddleware(thunks));

export default store;
