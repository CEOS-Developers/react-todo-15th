import React from 'react';
import './Screen.css';

const Screen = ({ children, todoLength }) => {
  return (
    <div className="Screen">
      <header className="Title">Todo List ( {todoLength} / 0 )</header>
      <section className="Container">{children}</section>
    </div>
  );
};

// Screen
//  ㄴ Title
//  ㄴ Container
//     ㄴ TodoList
//     ㄴ TodoInsert

export default Screen;

/*
React className naming convention
https://stackoverflow.com/questions/57221878/react-classname-naming-convention
*/
