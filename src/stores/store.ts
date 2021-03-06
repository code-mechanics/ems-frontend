import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import loginReducer from '../reducers/LoginReducer';
import postReducer from '../reducers/PostReducer';
import {reducer as authReducer} from '../reducers/AuthReducer';

const reducers = combineReducers({
    auth: authReducer,
    post: postReducer
});

export type IAppState = ReturnType<typeof reducers>;

const middelware = applyMiddleware(promise, thunk, createLogger());

export const store = createStore(reducers, middelware);
