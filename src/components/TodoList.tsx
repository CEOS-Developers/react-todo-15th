import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { ITodoListProps } from "../interface";

const TodoList = ({
  type,
  currentList,
  deleteCurrentList,
  addToggleList,
}: ITodoListProps) => {
  return (
    <TodoContents type={type}>
      <h3>
        {type === "todo" ? "TO DO" : "DONE"} (<span>{currentList.length}</span>)
      </h3>
      <List>
        {currentList.map(({ text }, idx) => (
          <TodoItem
            key={idx}
            type={type}
            todo={text}
            idx={idx}
            deleteCurrentList={deleteCurrentList}
            addToggleList={addToggleList}
          />
        ))}
      </List>
    </TodoContents>
  );
};

const TodoContents = styled.section<{ type: "todo" | "done" }>`
  padding: 0 20px;
  border-bottom: ${({ type }) => type === "todo" && "1px solid lightgrey"};
`;
const List = styled.ul`
  height: 150px;
  overflow: auto;
  list-style: none;
  padding-left: 10px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 15px;
  }
`;

export default React.memo(TodoList);
