import { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react';

interface ITodo {
  id: string;
  text: string;
  isDone: boolean;
}

interface ITodoListProps {
  isDoneList: boolean;
  savedList: ITodo[];
  setSavedList: Dispatch<SetStateAction<ITodo[]>>;
}

interface IHandleTodoInsert {
  (text: string): void;
}

interface IhandleDeleteBtnClick {
  (id: string): void;
}

interface IItemProps {
  id: string;
  text: string;
  isDoneList: boolean;
  handleTextClick: handleTextClick;
  handleDeleteBtnClick: IhandleDeleteBtnClick;
}

interface handleTextClick {
  (id: string): void;
}

export type {
  ITodo,
  ITodoListProps,
  IHandleTodoInsert,
  IItemProps,
  handleTextClick,
  IhandleDeleteBtnClick,
};
