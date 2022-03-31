import { Dispatch, SetStateAction} from "react";


//todo,done 파일에서 usetoDo를 불러와야하므로 list,Itemlist가 속성은 같지만 이름을 달리해야 했음
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