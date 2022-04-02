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
  todoList: ITodoItem[];
  doneList: ITodoItem[];
  dispatch: React.Dispatch<IAction>;
}

export type IAction =
  | {
      type: "ADD_TODO";
      todo: { text: string };
    }
  | {
      type: "DELETE_TODO";
      idx: number;
    }
  | {
      type: "ADD_DONE";
      todo: { text: string };
    }
  | {
      type: "DELETE_DONE";
      idx: number;
    };
