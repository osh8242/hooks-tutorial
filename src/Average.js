import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage = (list) => {
  console.log('평균값 계산 ->');
  if (list === null || list.length === 0) return 0;

  const sum = list.reduce((a, b) => a + b);
  return sum / list.length;
};

const Average = () => {
  const [list, setList] = useState([10, 50, 30, 70, 100]);
  const [number, setNumber] = useState('');
  const inputElement = useRef();
  const clickCount = useRef(1);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      setList(list.concat(parseInt(number)));
      setNumber('');
      inputElement.current.focus();
      clickCount.current++;
      console.log('clickCount -> ' + clickCount.current);
    },
    [list, number]
  );

  const avg = useMemo(() => {
    console.log('useMemo()함수에서 list가 변경될때 만 호출됨');
    return getAverage(list);
  }, [list]);

  console.log('화면 재 구성함');
  return (
    <div>
      <form>
        <input value={number} onChange={onChange} ref={inputElement} />
        <button type="submit" onClick={onClick}>
          등록
        </button>
      </form>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
