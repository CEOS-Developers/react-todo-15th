import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { ITodoItemProps } from "../interface";

const TodoItem = ({
  type,
  todo,
  idx,
  deleteCurrentList,
  addToggleList,
}: ITodoItemProps) => {
  // todo <-> done
  const _toggleTodo = useCallback((): void => {
    // toggle된 리스트에 item 추가
    addToggleList(todo);

    // 현재 리스트에서 item 삭제
    deleteCurrentList(idx);
  }, [idx, addToggleList, deleteCurrentList]);

  // delete item
  const _deleteTodo = useCallback((): void => {
    deleteCurrentList(idx);
  }, [idx, deleteCurrentList]);

  return (
    <ListItem>
      <ListToggleItem onClick={_toggleTodo}>
        <span>{type === "todo" ? "□" : "✔"}</span>
        <ListItemText type={type}>{todo}</ListItemText>
      </ListToggleItem>
      <TodoDeleteBtn src="bin.png" alt="delete-btn" onClick={_deleteTodo} />
    </ListItem>
  );
};

const TodoDeleteBtn = styled.img`
  width: 14px;
  padding-left: 5px;
  cursor: pointer;
  opacity: 0;
`;
const ListItem = styled.li`
  margin-bottom: 13px;
  :hover {
    ${TodoDeleteBtn} {
      opacity: 1;
      transition: 0.1s;
    }
  }
`;
const ListToggleItem = styled.section`
  display: inline;
  cursor: pointer;
`;
const ListItemText = styled.span<{ type: "todo" | "done" }>`
  font-size: 15px;
  padding-left: 5px;
  ${({ type }) =>
    type === "done" &&
    css`
      text-decoration: line-through;
      color: lightgrey;
    `}
`;

export default React.memo(TodoItem);
