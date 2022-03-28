export interface ITodoItem {
  text: string;
}

export interface ITodoInputProps {
  addTodoList: (text: string) => void;
}

interface ITodoProps {
  type: "todo" | "done";
  deleteCurrentList: (idx: number) => void;
  addToggleList: (text: string) => void;
}

export interface ITodoListProps extends ITodoProps {
  currentList: Array<ITodoItem>;
}

export interface ITodoItemProps extends ITodoProps {
  todo: string;
  idx: number;
}
