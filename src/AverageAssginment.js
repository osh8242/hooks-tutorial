import React from 'react';
import useAverageModel from './useAverageModel';
import AverageNumberList from './AverageNumberList';
import AverageDisplay from './AverageDisplay';
import AverageInputBox from './AverageInputBox';

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
