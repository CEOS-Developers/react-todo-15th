import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onIsDoneToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onIsDoneToggle={onIsDoneToggle} />
      ))}
    </div>
  );
};

export default TodoList;
