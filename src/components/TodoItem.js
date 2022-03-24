import React from 'react';
import {
  BsCheckCircleFill,
  BsCheckCircle,
  BsFillPencilFill,
  BsFillTrashFill,
} from 'react-icons/bs';

import './TodoItem.css';

const TodoItem = ({ todo, onIsDoneToggle }) => {
  const { id, text, isDone } = todo;
  return (
    <div className="TodoItem">
      <div className={`Content ${isDone ? 'Done' : ''}`}>
        {isDone ? (
          <button className="CheckButton" onClick={() => onIsDoneToggle(id)}>
            <BsCheckCircleFill className="CheckButtonFill" />
          </button>
        ) : (
          <button className="CheckButton" onClick={() => onIsDoneToggle(id)}>
            <BsCheckCircle className="CheckButtonUnFill" />
          </button>
        )}
        <span className="Text">{text}</span>
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

// 체크 박스를 버튼으로해야할까?

// JSX 내에서는 if문 사용불가 -> 삼항연산자만 사용가능
