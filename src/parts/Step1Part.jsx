import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function Step1Part() {
  return (
      <>
        <TodoListPart/>
        <CounterPart/>
      </>
  );
}

function todoSelector(state) {
  return state.step1TodoList;
}

function TodoListPart() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  
  const [value, setValue] = useState('');
  
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  
  const register = useCallback(() => {
    dispatch({type: 'TODO_ADD', text: value});
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

function counterSelector(state) {
  return state.step1Counter;
}

function CounterPart() {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();
  const increase = useCallback(() => {
    dispatch({type: 'STEP1_INCREASE'});
  }, [dispatch]);
  const decrease = useCallback(() => {
    dispatch({type: 'STEP1_DECREASE'});
  }, [dispatch]);
  
  return (
      <div>
        <span>카운트 : {count}</span>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
  );
}
