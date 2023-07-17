import React from 'react';

const AverageNumberList = ({ list }) => {
  return (
    <ul>
      {list.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
};

export default AverageNumberList;
