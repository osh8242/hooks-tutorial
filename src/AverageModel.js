import { useReducer } from 'react';
const initData = {
  list: [],
  number: 0,
};

// const [list, setList] = useState([10, 50, 30, 70, 100]);
// const [number, setNumber] = useState('');
const reducer = (state, action) => {
  return state;
};

const AverageModel = () => {
  const [state, dispatch] = useReducer(reducer, initData);

  const onChange = (e) => {
    dispatch(e.target);
  };
  const onClick = (e) => {};

  return {
    onChange,
    onClick,
  };
};

export default AverageModel;
