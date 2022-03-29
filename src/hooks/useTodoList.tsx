import { useState } from "react";
import { ITodoItem } from "interface";

const useTodoList = (initialList: Array<ITodoItem>) => {
  const [todoList, setTodoList] = useState(initialList);

  // todoList에 item 추가
  const _addTodoList = (text: string): void => {
    setTodoList([...todoList, { text }]);
  };

  // todoList에서 item 삭제
  const _deleteTodoList = (idx: number): void => {
    setTodoList(todoList.filter((_, todoIdx) => todoIdx !== idx));
  };

  return { todoList, _addTodoList, _deleteTodoList };
};

export default useTodoList;
