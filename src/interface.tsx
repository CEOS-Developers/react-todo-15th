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

export interface IState {
  todoList: Array<ITodoItem>;
  doneList: Array<ITodoItem>;
  dispatch: React.Dispatch<IAction>;
}

export interface IAction {
  type: "ADD_TODO" | "DELETE_TODO" | "ADD_DONE" | "DELETE_DONE";
  value: any;
}
