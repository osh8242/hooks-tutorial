import React, { useReducer } from 'react';

function model(state, action) {
  //처리 루틴.. 여러개가 될 수 있음
  //state는 관리하는 상태 변수
  //action : 명령 (처리 루틴 여러개를 구분하는 키)
  switch (action.type) {
    case 'incValue':
      return { value: state.value + 1 };

    case 'decValue':
      return { value: state.value - 1 };

    default:
      return state;
  }
}

const Counter = () => {
  //상태변수 선언
  //const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(model, { value: 0 });
  //model : 처리함수
  //{value : 0} : 초기값

  const incValue = () => {
    dispatch({ type: 'incValue' });
  };

  const decValue = () => {
    dispatch({ type: 'decValue' });
  };

  return (
    <div>
      <p>
        현재 카운트 값은 : <b>{state.value}</b>
      </p>
      <button onClick={incValue}>1증가</button>
      <button onClick={decValue}>1감소</button>
    </div>
  );
};

export default Counter;
