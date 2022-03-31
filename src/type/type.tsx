import { Dispatch, SetStateAction} from "react";

export interface IProps{

  type : string;
  setDoneToDoList:  Dispatch<SetStateAction<string[]>>;
  list : Array<string>;
  setToDoList: Dispatch<SetStateAction<string[]>>;

}

export interface ItemList{

  type : string;
  setDoneToDoList: Dispatch<SetStateAction<Array<string>>>;
  ItemList : string[];
  setToDoList: Dispatch<SetStateAction<Array<string>>>;
}