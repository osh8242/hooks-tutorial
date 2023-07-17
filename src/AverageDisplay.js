import React, { useMemo } from 'react';
import getAverage from './getAverage';

const AverageDisplay = ({ list }) => {
  const avg = useMemo(() => {
    console.log('useMemo()함수에서 list가 변경될때 만 호출됨');
    return getAverage(list);
  }, [list]);

  return (
    <div>
      <b>평균값:</b>
      {avg}
    </div>
  );
};

export default AverageDisplay;
