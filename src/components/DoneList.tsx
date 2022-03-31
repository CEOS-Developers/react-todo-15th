import { useContext, useCallback } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "contexts";

const DoneList = () => {
  const { doneList, dispatch } = useContext(TodoContext);

  // todo item 추가
  const _addTodoList = useCallback(
    (todo: string): void => {
      dispatch({
        type: "ADD_TODO",
        todo: { text: todo },
      });
    },
    [dispatch],
  );

  // done item 삭제
  const _deleteDoneList = useCallback(
    (idx: number): void => {
      dispatch({
        type: "DELETE_DONE",
        idx,
      });
    },
    [dispatch],
  );

  return (
    <TodoContents>
      <h3>DONE ({doneList.length})</h3>
      <ul>
        {doneList.map(({ text }, idx) => (
          <TodoItem
            key={idx}
            type="done"
            todo={text}
            idx={idx}
            deleteCurrentList={_deleteDoneList}
            addToggleList={_addTodoList}
          />
        ))}
      </ul>
    </TodoContents>
  );
};

const TodoContents = styled.section`
  padding: 0 20px;
`;

export default DoneList;
