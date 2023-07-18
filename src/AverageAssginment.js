import React from 'react';
import AverageDisplay from './AverageDisplay';
import AverageInputBox from './AverageInputBox';
import AverageNumberList from './AverageNumberList';
import useAverageModel from './useAverageModel';

const initData = {
  list: [10, 50, 30, 70, 100],
  number: '',
};

const AverageAssginment = () => {
  const [state, onChange, onClick] = useAverageModel(initData);

  console.log('화면 재 구성함');
  return (
    <div>
      <AverageInputBox state={state} onChange={onChange} onClick={onClick} />
      <AverageNumberList list={state.list} />
      <AverageDisplay list={state.list} />
    </div>
  );
};

export default AverageAssginment;
