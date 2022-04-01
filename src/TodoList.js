import React from "react";
import TodoItem from "./TodoItem.js";

const ListTotalBox = styled.div`
    font-family: sans-serif;
    text-align: left;
    margin: 20px 20px 20px 20px;
`;

const ListTitle = styled.h3`
    font-family: sans-serif;
    text-align: left;
    margin: 20px 20px 20px 20px;
`;

const ListBox = styled.ul`
    font-family: sans-serif;
    text-align: left;
    margin: 20px 20px 20px 20px;
`;


const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ListTotalBox>
      <ListTitle>오늘 할 일은 다음과 같아요.</ListTitle>
      <ListBox>
        <TodoItem
          todos={todos}
          onToggle={onToggle}
          onDelete={onDelete}
          keyDone= {false}
        />
      </ListBox>
      <ListTitle>벌써 다음과 같은 일들을 해냈어요.</ListTitle>
      <ListBox>
        <TodoItem
          todos={todos}
          onToggle={onToggle}
          onDelete={onDelete}
          keyDone= {true}
        />
      </ListBox>
    </ListTotalBox>
  );
};

export default TodoList;
