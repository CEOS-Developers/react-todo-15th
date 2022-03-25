import { useState } from 'react';
import { TodoItemData } from '../interface';

// TodoItemData의 형식이 바뀌어도 interface.tsx에서 바꾸기만 하면
// 해당 형식을 사용하는 여러 곳에서 동일하게 적용할 수 있습니다.
const useTodo = (initialList: TodoItemData[]) => {
  const [todoList, setTodoList] = useState(initialList);

  const addTodoList = (data: string): void => {
    setTodoList([...todoList, { data: data }]);
  };

  const deleteTodoList = (index: number): void => {
    let temp = [...todoList];
    temp.splice(index, 1);
    setTodoList(temp);
  };

  return { todoList, addTodoList, deleteTodoList };
};

export default useTodo;
