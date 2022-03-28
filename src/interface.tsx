import React from "react";

interface TodoItem {
  id: number;
  text: string;
}

export interface ITodoInputProps {
  todoList: Array<TodoItem>;
  setTodoList: React.Dispatch<React.SetStateAction<Array<TodoItem>>>;
}

export interface ITodoListProps {
  type: "todo" | "done";
  currentList: Array<TodoItem>;
  toggleList: Array<TodoItem>;
  setCurrentList: React.Dispatch<React.SetStateAction<Array<TodoItem>>>;
  setToggleList: React.Dispatch<React.SetStateAction<Array<TodoItem>>>;
}

export interface ITodoItemProps extends ITodoListProps {
  todo: TodoItem;
  idx: number;
}
