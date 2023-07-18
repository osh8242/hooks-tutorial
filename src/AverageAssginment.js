import React from 'react';
import AverageDisplay from './AverageDisplay';
import AverageInputBox from './AverageInputBox';
import AverageNumberList from './AverageNumberList';
import useAverageModel from './useAverageModel';

const initData = {
  list: [10, 20, 30, 40, 50],
  number: '',
};

const AverageAssginment = () => {
  const [state, onChange, onClick] = useAverageModel(initData);

  console.log('화면 재 구성함');
  return (
    <div>
      <AverageInputBox
        number={state.number}
        onChange={onChange}
        onClick={onClick}
      />
      <AverageNumberList list={state.list} />
      <AverageDisplay list={state.list} />
    </div>
  );
};

export default AverageAssginment;
