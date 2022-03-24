import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdRadioButtonUnchecked } from 'react-icons/md';

const TodoItem = ({ todo }) => {
  const { id, text, isDone } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${isDone ? 'Done' : ''}`}>
        {isDone ? <BsCheckCircleFill /> : <MdRadioButtonUnchecked />}
        <span>{text}</span>
      </div>
    </div>
  );
};

export default TodoItem;

// How can I interpolate JSX with an expression in a string?
// https://stackoverflow.com/questions/30372538/how-can-i-interpolate-jsx-with-an-expression-in-a-string
