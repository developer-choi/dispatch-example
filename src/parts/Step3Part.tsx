import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {todoAddActionCreator} from '../store/step3/todo';
import {decreaseActionCreator, increaseActionCreator} from '../store/step3/counter';

export default function Step3Part() {
  return (
      <>
        <TodoListPart/>
        <CounterPart/>
      </>
  );
}

function todoSelector(state: RootState) {
  return state.todo.todos;
}

function TodoListPart() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  
  const [value, setValue] = useState('');
  
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  
  const register = useCallback(() => {
    dispatch(todoAddActionCreator(value));
    setValue('');
  }, [dispatch, value]);
  
  return (
      <div>
        <input value={value} onChange={onChange}/>
        <button onClick={register}>저장</button>
        {todos.map((todo, index) => (
            <p key={index}>{todo}</p>
        ))}
      </div>
  );
}

function counterSelector(state: RootState) {
  return state.counter.count;
}

function CounterPart() {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();
  const increase = useCallback(() => {
    dispatch(increaseActionCreator());
  }, [dispatch]);
  const decrease = useCallback(() => {
    dispatch(decreaseActionCreator());
  }, [dispatch]);
  
  return (
      <div>
        <span>카운트 : {count}</span>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
  );
}
