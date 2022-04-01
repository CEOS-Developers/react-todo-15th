import React from "react";
import "./App.js";

function List({ text, id, todoDone, onToggle, onDelete, keyDone }) {
  if (todoDone === Boolean(keyDone)) {
    return (
      <div>
        <li>
          <button id={id} onClick={onToggle}>
            ✔
          </button>
          <span>{text}</span>
          <button id={id} onClick={onDelete}>
            🚮
          </button>
        </li>
      </div>
    );
  } else {
    return <></>;
  }
}

const TodoItem = ({ todos, onToggle, onDelete, keyDone }) => {
  return (
    <div>
      {todos.map((todo) => (
        <List
          text={todo.text}
          id={todo.id}
          todoDone={todo.done}
          keyDone={keyDone}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoItem;
