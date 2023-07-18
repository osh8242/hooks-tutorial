import React, { useRef } from 'react';

const AverageInputBox = (props) => {
  const { number, onChange, onClick } = props;
  const inputElement = useRef();
  const clickCount = useRef(1);

  const onInputClick = (e) => {
    e.preventDefault();
    clickCount.current++;
    console.log('clickCount.current', clickCount.current);
    inputElement.current.focus();
    onClick();
  };

  return (
    <form onSubmit={onInputClick}>
      <input value={number} onChange={onChange} ref={inputElement} />
      <button type="submit">등록</button>
    </form>
  );
};

export default AverageInputBox;
