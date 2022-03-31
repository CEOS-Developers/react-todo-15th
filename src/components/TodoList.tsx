import React, { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "contexts";

const TodoList = () => {
  const { todoList, _addDoneList, _deleteTodoList } = useContext(TodoContext);

  return (
    <TodoContents>
      <h3>TO DO ({todoList.length})</h3>
      <ul>
        {todoList.map(({ text }, idx) => (
          <TodoItem
            key={idx}
            type="todo"
            todo={text}
            idx={idx}
            deleteCurrentList={_deleteTodoList}
            addToggleList={_addDoneList}
          />
        ))}
      </ul>
    </TodoContents>
  );
};

const TodoContents = styled.section`
  padding: 0 20px;
  border-bottom: 1px solid lightgrey;
`;

export default TodoList;
