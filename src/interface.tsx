export interface ITodoItem {
  text: string;
}

export interface ITodoInputProps {
  addTodoList: (text: string) => void;
}

export interface ITodoListProps {
  type: "todo" | "done";
  currentList: Array<ITodoItem>;
  deleteCurrentList: (idx: number) => void;
  addToggleList: (text: string) => void;
}

export interface ITodoItemProps {
  type: "todo" | "done";
  todo: string;
  idx: number;
  deleteCurrentList: (idx: number) => void;
  addToggleList: (text: string) => void;
}
