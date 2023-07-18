import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return { ...state, number: action.value };
    case 'click':
      const newList = state.list.concat(parseInt(state.number));
      return { list: newList, number: '' };

    default:
      return state;
  }
};

const useAverageModel = (initData) => {
  const [state, dispatch] = useReducer(reducer, initData);

  const onChange = (e) => {
    dispatch({ type: 'change', value: e.target.value });
  };
  const onClick = (e) => {
    if (isNaN(state.number) || state.number === '') {
      alert('숫자를 입력하세요');
      return;
    }
    dispatch({ type: 'click' });
  };

  return [state, onChange, onClick];
};

export default useAverageModel;
