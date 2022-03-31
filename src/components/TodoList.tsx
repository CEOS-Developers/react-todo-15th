import { useContext, useCallback } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "contexts";

const TodoList = () => {
  const { todoList, dispatch } = useContext(TodoContext);

  // done item 추가
  const _addDoneList = useCallback(
    (todo: string): void => {
      dispatch({
        type: "ADD_DONE",
        todo: { text: todo },
      });
    },
    [dispatch],
  );

  // todo item 삭제
  const _deleteTodoList = useCallback(
    (idx: number): void => {
      dispatch({
        type: "DELETE_TODO",
        idx,
      });
    },
    [dispatch],
  );

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
