import React from 'react';
import './Screen.css';

const Screen = ({ children }) => {
  return (
    <div className="Screen">
      <header className="title">Todo List ( 0 / 0 )</header>
      <section>{children}</section>
    </div>
  );
};

export default Screen;
