import React from 'react';
import {
  BsCheckCircleFill,
  BsCheckCircle,
  BsFillPencilFill,
  BsFillTrashFill,
} from 'react-icons/bs';

import './TodoItem.css';

const TodoItem = ({ todo }) => {
  const { id, text, isDone } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${isDone ? 'Done' : ''}`}>
        {isDone ? <BsCheckCircleFill /> : <BsCheckCircle />}
        <span className="text">{text}</span>
        <button className="EditButton">
          <BsFillPencilFill />
        </button>
        <button className="DeleteButton">
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

// How can I interpolate JSX with an expression in a string?
// https://stackoverflow.com/questions/30372538/how-can-i-interpolate-jsx-with-an-expression-in-a-string
