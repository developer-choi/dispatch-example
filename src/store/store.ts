import {combineReducers, createStore} from 'redux';
import {step1Counter} from './step1/step1Counter';
import {step1TodoList} from './step1/step1TodoList';

const rootReducer = combineReducers({step1Counter, step1TodoList});
export const store = createStore(rootReducer);
