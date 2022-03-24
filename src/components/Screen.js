import React from 'react';
import './Screen.css';
import { BsPlusCircle } from 'react-icons/bs';

const Screen = ({ children, todoLength }) => {
  return (
    <div className="Screen">
      <header className="Title">Todo List ( {todoLength} / 0 )</header>
      <section className="TodoListContainer">{children}</section>
      <form className="Form">
        <input
          autoFocus
          className="Input"
          placeholder=" Please enter here..."
        />
        <button className="Button">
          <BsPlusCircle />
        </button>
      </form>
    </div>
  );
};

export default Screen;

/*
React className naming convention
https://stackoverflow.com/questions/57221878/react-classname-naming-convention
*/
