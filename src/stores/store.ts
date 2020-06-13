import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import loginReducer from '../reducers/LoginReducer';

const reducers = combineReducers({
    login: loginReducer
});

export type IAppState = ReturnType<typeof reducers>;

const middelware = applyMiddleware(promise, thunk, createLogger());

export const store = createStore(reducers, middelware);
