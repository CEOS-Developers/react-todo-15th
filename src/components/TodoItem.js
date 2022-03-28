import React, { useCallback } from "react";
import styled, { css } from "styled-components";

const TodoItem = ({
  type,
  todo,
  idx,
  currentList,
  toggleList,
  setCurrentList,
  setToggleList,
}) => {
  // todo <-> done
  const _toggleTodo = useCallback(() => {
    // toggle된 리스트에 item 추가
    setToggleList([...toggleList, currentList[idx]]);

    // 현재 리스트에서 item 삭제
    setCurrentList(currentList.filter((_, todoId) => todoId !== Number(idx)));
  }, [idx, currentList, toggleList, setCurrentList, setToggleList]);

  // delete item
  const _deleteTodo = useCallback(() => {
    setCurrentList(currentList.filter((_, todoId) => todoId !== Number(idx)));
  }, [idx, currentList, setCurrentList]);

  return (
    <ListItem>
      <ListToggleItem onClick={_toggleTodo}>
        <span>{type === "todo" ? "□" : "✔"}</span>
        <ListItemText type={type}>{todo.text}</ListItemText>
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
const ListItemText = styled.span`
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
