import React, { useCallback } from "react";
import styled from "styled-components";

const TodoContents = styled.section`
  padding: 0 20px;
  border-bottom: ${({ type }) => type === "todo" && "1px solid lightgrey"};
`;
const List = styled.ul`
  height: 150px;
  overflow: scroll auto;
  overflow-x: hidden;
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
  text-decoration-line: ${({ type }) => type === "done" && "line-through"};
  color: ${({ type }) => type === "done" && "lightGrey"};
`;

const TodoList = ({
  type,
  currentList,
  toggleList,
  setCurrentList,
  setToggleList,
}) => {
  // todo <-> done
  const _toggleTodo = useCallback(
    ({ target }) => {
      const parentNode = target.parentNode.parentNode;
      const idx = parentNode.id;

      // toggle된 리스트에 item 추가
      setToggleList([...toggleList, currentList[idx]]);

      // 현재 리스트에서 item 삭제
      setCurrentList(currentList.filter((_, todoId) => todoId !== Number(idx)));
    },
    [currentList, toggleList],
  );

  // delete item
  const _deleteTodo = useCallback(
    ({ target }) => {
      const parentNode = target.parentNode;
      const idx = parentNode.id;

      setCurrentList(currentList.filter((_, todoId) => todoId !== Number(idx)));
    },
    [currentList],
  );

  return (
    <TodoContents type={type}>
      <h3>
        {type === "todo" ? "TO DO" : "DONE"} (<span>{currentList.length}</span>)
      </h3>
      <List>
        {currentList.map((todo, idx) => (
          <ListItem key={todo.id} id={idx}>
            <ListToggleItem onClick={_toggleTodo}>
              <span>{type === "todo" ? "□" : "✔"}</span>
              <ListItemText type={type}>{todo.text}</ListItemText>
            </ListToggleItem>
            <TodoDeleteBtn
              src="bin.png"
              alt="delete-btn"
              onClick={_deleteTodo}
            />
          </ListItem>
        ))}
      </List>
    </TodoContents>
  );
};

export default React.memo(TodoList);
