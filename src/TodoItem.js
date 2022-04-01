import React from "react";
import List from "./List.js";
import styled from 'styled-components';

const RowBox = styled.div`
    font-family: sans-serif;
    text-align: left;
`;

const TodoItem = ({ todos, onToggle, onDelete, keyDone }) => {
  return (
    <RowBox>
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
    </RowBox>
  );
};

export default TodoItem;
