export interface ITodoItem {
  text: string;
}

export interface ITodoItemProps {
  type: "todo" | "done";
  todo: string;
  idx: number;
  deleteCurrentList: (idx: number) => void;
  addToggleList: (text: string) => void;
}
