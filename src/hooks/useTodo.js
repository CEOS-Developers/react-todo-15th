import { useState } from 'react';

const useTodo = (initialList) => {
  const [todoList, setTodoList] = useState(initialList);

  const addTodoList = (textData) => {
    setTodoList([...todoList, { data: textData }]);
  };

  const deleteTodoList = (index) => {
    let temp = [...todoList];
    temp.splice(index, 1);
    setTodoList(temp);
  };

  return [todoList, addTodoList, deleteTodoList];
};

export default useTodo;
