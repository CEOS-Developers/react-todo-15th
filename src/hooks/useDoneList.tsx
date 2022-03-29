import { useState } from "react";
import { ITodoItem } from "interface";

const useDoneList = (initialList: Array<ITodoItem>) => {
  const [doneList, setDoneList] = useState(initialList);

  // doneList에 item 추가
  const _addDoneList = (text: string): void => {
    setDoneList([...doneList, { text }]);
  };

  // doneList에서 item 삭제
  const _deleteDoneList = (idx: number): void => {
    setDoneList(doneList.filter((_, todoIdx) => todoIdx !== idx));
  };

  return { doneList, _addDoneList, _deleteDoneList };
};

export default useDoneList;
