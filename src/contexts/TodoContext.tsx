import { createContext } from "react";
import { useTodoList, useDoneList } from "hooks";

// localStorage에서 todoList, doneList item 불러오기
const todoStorage = localStorage.getItem("todoList");
const doneStorage = localStorage.getItem("doneList");

let loadTodo = todoStorage ? JSON.parse(todoStorage) : [];
let loadDone = doneStorage ? JSON.parse(doneStorage) : [];

// 전역 데이터의 초기값
const TodoContext = createContext({
  todoList: [{ text: "" }],
  _addTodoList: (text: string) => {},
  _deleteTodoList: (idx: number) => {},
  doneList: [{ text: "" }],
  _addDoneList: (text: string) => {},
  _deleteDoneList: (idx: number) => {},
});

interface IContextProps {
  children: JSX.Element;
}

const TodoProvider = ({ children }: IContextProps) => {
  const { todoList, _addTodoList, _deleteTodoList } = useTodoList(loadTodo);
  const { doneList, _addDoneList, _deleteDoneList } = useDoneList(loadDone);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        _addTodoList,
        _deleteTodoList,
        doneList,
        _addDoneList,
        _deleteDoneList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
