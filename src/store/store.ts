import {combineReducers, createStore} from 'redux';
import {step1Counter} from './step1/step1Counter';
import {step1TodoList} from './step1/step1TodoList';
import {step2Counter} from './step2/step2Counter';
import {step2TodoList} from './step2/step2TodoList';
import {counter} from './step3/counter';
import {todo} from './step3/todo';

const rootReducer = combineReducers({step1Counter, step1TodoList, step2Counter, step2TodoList, counter, todo});
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
