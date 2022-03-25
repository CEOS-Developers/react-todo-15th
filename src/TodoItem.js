import React from "react";
import "./App.css";

function List({ text, key, onRemove, onToggle }) {
  return (
    <div>
      <li>
        <button onToggle={onToggle}>check</button>
        <span>({text})</span>
        <button onRemove={() => onRemove(key)} key={key}>
          -
        </button>
      </li>
    </div>
  );
}

const TodoItem = ({ todos, onRemove, onToggle }) => {
  return (
    <div>
      {todos.map((todo) => (
        <List
          text={todo.text}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoItem;
