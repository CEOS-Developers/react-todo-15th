import { useState } from 'react';

const useFinished = (initialList) => {
  const [finishedList, setFinishedList] = useState(initialList);

  const addFinishedList = (textData) => {
    setFinishedList([...finishedList, { data: textData }]);
  };

  const deleteFinishedList = (index) => {
    let temp = [...finishedList];
    temp.splice(index, 1);
    setFinishedList(temp);
  };

  return [finishedList, addFinishedList, deleteFinishedList];
};

export default useFinished;
