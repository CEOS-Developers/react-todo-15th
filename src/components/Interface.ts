import { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react';

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

interface IhandleDeleteBtnClick {
  (button: ButtonHTMLAttributes<HTMLButtonElement>): void;
}

interface IItemProps {
  id: string;
  text: string;
  isDoneList: boolean;
  handleTextClick: handleTextClick;
  handleDeleteBtnClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface handleTextClick {
  (id: string): void;
}

export type {
  ITodo,
  ILists,
  IHandleTodoInsert,
  IItemProps,
  handleTextClick,
  IhandleDeleteBtnClick,
};
