import React from "react";
import TodoItem from "./TodoItem.js";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <div id="ListBox" className="Box">
      <h3 id="todo-list-title">오늘 할 일은 다음과 같아요.</h3>
      <ul className="todo-list-box">
        <TodoItem
          todos={todos}
          onToggle={onToggle}
          onDelete={onDelete}
          keyDone= {false}
        />
      </ul>
      <h3 id="done-list-title">벌써 다음과 같은 일들을 해냈어요.</h3>
      <ul className="todo-list-box">
        <TodoItem
          todos={todos}
          onToggle={onToggle}
          onDelete={onDelete}
          keyDone= {true}
        />
      </ul>
    </div>
  );
};

export default TodoList;
