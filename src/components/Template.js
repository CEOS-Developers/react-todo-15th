import React from 'react';
import './Template.css';

const Template = ({ children }) => {
  return (
    <div className="Template">
      {/* header */}
      <div className="title">Todo List ( 0 / 0 )</div>
      {/* section */}
      <div>{children}</div>
    </div>
  );
};

export default Template;
