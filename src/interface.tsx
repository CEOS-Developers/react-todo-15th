interface ITodo {
  id: number;
  text: string;
  isDone: boolean;
}

interface IHandleIsDoneToggle {
  (id: number): void;
}

interface IHandleRemoveTodo {
  (id: number): void;
}

interface IHandleTodoInsert {
  (text: string): void;
}

interface ITodoItemProps {
  todo: ITodo;
  handleIsDoneToggle: IHandleIsDoneToggle;
  handleRemoveTodo: IHandleRemoveTodo;
}

interface ITodoListProps {
  todos: ITodo[];
  doneCnt: number;
  todoCnt: number;
  handleIsDoneToggle: IHandleIsDoneToggle;
  handleRemoveTodo: IHandleRemoveTodo;
}

export type {
  ITodo, IHandleIsDoneToggle, IHandleRemoveTodo, IHandleTodoInsert, ITodoListProps, ITodoItemProps,
}
