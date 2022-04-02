import { useCallback } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodo } from "hooks";

const TodoList = () => {
  const { todoList, addDone, deleteTodo } = useTodo();

  // done item 추가
  const _addDoneList = useCallback(
    (todo: string): void => {
      addDone({ text: todo });
    },
    [addDone],
  );

  // todo item 삭제
  const _deleteTodoList = useCallback(
    (idx: number): void => {
      deleteTodo(idx);
    },
    [deleteTodo],
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
