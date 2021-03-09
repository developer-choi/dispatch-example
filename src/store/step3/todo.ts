import {createAction, handleActions} from 'redux-actions';

const TODO_ADD = 'dispatch-example/todo/TODO_ADD';

export const todoAddActionCreator = createAction<string>(TODO_ADD);

export interface TodoState {
  todos: string[];
}

const initialState: TodoState = {
  todos: []
};

export const todo = handleActions<TodoState, any>({
  
  [TODO_ADD]: (state, action: ReturnType<typeof todoAddActionCreator>) => ({
    todos: state.todos.concat(action.payload)
  }),
  
}, initialState);
