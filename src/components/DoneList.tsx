import { useCallback } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodo } from "hooks";

const DoneList = () => {
  const { doneList, _addTodo, _deleteDone } = useTodo();

  // todo item 추가
  const _addTodoList = useCallback(
    (todo: string): void => {
      _addTodo({ text: todo });
    },
    [_addTodo],
  );

  // done item 삭제
  const _deleteDoneList = useCallback(
    (idx: number): void => {
      _deleteDone(idx);
    },
    [_deleteDone],
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
