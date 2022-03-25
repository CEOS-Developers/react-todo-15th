import React from "react";
import "./App.css";
import TodoItem from "./TodoItem.js";

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div>
      <h3 id="todo-list-title">오늘 할 일은 다음과 같아요.</h3>
      <ul className="todo-list-box">
        <TodoItem todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </ul>
    </div>
  );
};

export default TodoList;
