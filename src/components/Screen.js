import React from 'react';
import './Screen.css';

const Screen = ({ children, todoLength }) => {
  return (
    <div className="Screen">
      <header className="title">Todo List ( {todoLength} / 0 )</header>
      <section>{children}</section>
    </div>
  );
};

export default Screen;
