import React, { useReducer } from 'react';

function model(state, action) {
  switch (action.cmd) {
    case 'incValue':
      return { value: state.value + 1 };
    case 'decValue':
      return { value: state.value - 1 };
    default:
  }
}

const CounterCP = () => {
  const [state, dispatch] = useReducer(model, { value: 0 });

  const incValue = () => {
    dispatch({ cmd: 'incValue' });
  };

  const decValue = () => {
    dispatch({ cmd: 'decValue' });
  };

  return (
    <div>
      <p>현재 카운트 값은 : {state.value}</p>
      <button onClick={incValue}>1증가</button>
      <button onClick={decValue}>1감소</button>
    </div>
  );
};

export default CounterCP;
