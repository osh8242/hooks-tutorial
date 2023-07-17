const getAverage = (list) => {
  console.log('평균값 계산 ->');
  if (list === null || list.length === 0) return 0;

  const sum = list.reduce((a, b) => a + b);
  return sum / list.length;
};

export default getAverage;
