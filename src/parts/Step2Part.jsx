import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {step2TodoAddActionCreator} from '../store/step2/step2TodoList';
import {step2DecreaseActionCreator, step2IncreaseActionCreator} from '../store/step2/step2Counter';

export default function Step2Part() {
  return (
      <>
        <TodoListPart/>
        <CounterPart/>
      </>
  );
}

function todoSelector(state) {
  return state.step2TodoList;
}

function TodoListPart() {
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();
  
  const [value, setValue] = useState('');
  
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  
  const register = useCallback(() => {
    dispatch(step2TodoAddActionCreator(value));
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
  return state.step2Counter;
}

function CounterPart() {
  const count = useSelector(counterSelector);
  const dispatch = useDispatch();
  const increase = useCallback(() => {
    dispatch(step2IncreaseActionCreator());
  }, [dispatch]);
  const decrease = useCallback(() => {
    dispatch(step2DecreaseActionCreator());
  }, [dispatch]);
  
  return (
      <div>
        <span>카운트 : {count}</span>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
  );
}
