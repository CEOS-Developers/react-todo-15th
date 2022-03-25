import { useState } from 'react';
import { TodoItemData } from '../interface';

// TodoItemData의 형식이 바뀌어도 interface.tsx에서 바꾸기만 하면
// 해당 형식을 사용하는 여러 곳에서 동일하게 적용할 수 있습니다.
const useFinished = (initialList: TodoItemData[]) => {
  const [finishedList, setFinishedList] = useState(initialList);

  const addFinishedList = (textData: string) => {
    setFinishedList([...finishedList, { data: textData }]);
  };

  const deleteFinishedList = (index: number) => {
    let temp = [...finishedList];
    temp.splice(index, 1);
    setFinishedList(temp);
  };

  return { finishedList, addFinishedList, deleteFinishedList };
};

export default useFinished;
