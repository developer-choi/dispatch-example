import {combineReducers, createStore} from 'redux';
import {step1Counter} from './step1/step1Counter';
import {step1TodoList} from './step1/step1TodoList';
import {step2Counter} from './step2/step2Counter';
import {step2TodoList} from './step2/step2TodoList';

const rootReducer = combineReducers({step1Counter, step1TodoList, step2Counter, step2TodoList});
export const store = createStore(rootReducer);
