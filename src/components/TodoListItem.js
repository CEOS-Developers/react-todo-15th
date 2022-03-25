import React from "react";
import styled from "styled-components";

import icon_trash from "../assets/black-icons/trash.png";

const ScrollViewListItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 6px 10px;
  justify-content: flex-end;

  ${({ completed }) =>
    completed &&
    `
    justify-content: flex-start;
  `}
`;

const ScrollViewListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 225px;
  border-radius: 10px;
  background: #fee30d;
  box-shadow: 0 0.7rem 1rem hsl(0 0% 0% / 3%);

  ${({ completed }) =>
    completed &&
    `
    background : white;
  `}
`;

const ScrollViewListItemContentText = styled.div`
  margin: 8px 12px;
  text-align: right;
  font-size: 11px;
  font-weight: 500;
  color: #333333;

  ${({ completed }) =>
    completed &&
    `
    text-align: left;
  `}
`;

const ScrollViewListItemContentDelete = styled.img`
  width: 15px;
  height: 15px;
  margin: 0px 8px;
`;

const ScrollViewListItemDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0px 6px;
  font-size: 9px;
  font-weight: 300;
  color: #333333;

  ${({ darkMode }) =>
    darkMode &&
    `
    color: white;
  `}
`;

const TodoListItem = ({ darkMode, todo, toggleTodo, deleteTodo }) => {
  return !todo.completed ? (
    <ScrollViewListItem completed={todo.completed}>
      <ScrollViewListItemDate darkMode={darkMode}>{todo.time}</ScrollViewListItemDate>
      <ScrollViewListItemContent completed={todo.completed}>
        <ScrollViewListItemContentDelete
          src={icon_trash}
          onClick={() => deleteTodo(todo.id)}
        />
        <ScrollViewListItemContentText
          completed={todo.completed}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </ScrollViewListItemContentText>
      </ScrollViewListItemContent>
    </ScrollViewListItem>
  ) : (
    <ScrollViewListItem completed={todo.completed}>
      <ScrollViewListItemContent completed={todo.completed}>
        <ScrollViewListItemContentText
          completed={todo.completed}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </ScrollViewListItemContentText>
        <ScrollViewListItemContentDelete
          src={icon_trash}
          onClick={() => deleteTodo(todo.id)}
        />
      </ScrollViewListItemContent>
      <ScrollViewListItemDate darkMode={darkMode}>{todo.time}</ScrollViewListItemDate>
    </ScrollViewListItem>
  );
};

export default TodoListItem;
