import { useState } from "react";
import { ITodoItem } from "../interface";

const useTodoList = (initialList: Array<ITodoItem>) => {
  const [todoList, setTodoList] = useState(initialList);

  const _addTodoList = (text: string): void => {
    setTodoList([...todoList, { text }]);
  };

  const _deleteTodoList = (idx: number): void => {
    setTodoList(todoList.filter((_, todoIdx) => todoIdx !== idx));
  };

  return { todoList, _addTodoList, _deleteTodoList };
};

export default useTodoList;
