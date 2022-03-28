import { useState } from "react";
import { ITodoItem } from "../interface";

const useDoneList = (initialList: Array<ITodoItem>) => {
  const [doneList, setDoneList] = useState(initialList);

  const _addDoneList = (text: string): void => {
    setDoneList([...doneList, { text }]);
  };

  const _deleteDoneList = (idx: number): void => {
    setDoneList(doneList.filter((_, todoIdx) => todoIdx !== idx));
  };

  return { doneList, _addDoneList, _deleteDoneList };
};

export default useDoneList;
