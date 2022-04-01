import { Dispatch, SetStateAction } from 'react';

interface ITodo {
  id: string;
  text: string;
  isDone: boolean;
}

interface ILists {
  isDoneList: boolean;
  savedList: ITodo[];
  setSavedList: Dispatch<SetStateAction<ITodo[]>>;
}

interface IHandleTodoInsert {
  (text: string): void;
}

export type { ITodo, ILists, IHandleTodoInsert };
