import {createAction, handleActions} from 'redux-actions';

const INCREASE = 'dispatch-example/counter/INCREASE';
const DECREASE = 'dispatch-example/counter/DECREASE';

export const increaseActionCreator = createAction(INCREASE);
export const decreaseActionCreator = createAction(DECREASE);

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

export const counter = handleActions<CounterState, any>({
  
  [INCREASE]: (state) => ({
    count: state.count + 1
  }),
  [DECREASE]: (state) => ({
    count: state.count - 1
  }),
  
}, initialState);
