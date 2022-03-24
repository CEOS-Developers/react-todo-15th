import React from 'react';

const Template = ({ children }) => {
  return (
    <div>
      <div>Todo List ( 0 / 0 )</div>
      <div>{ children }</div>
    </div>
  );
};

export default Template;
