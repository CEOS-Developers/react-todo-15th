import { useReducer, createContext } from "react";
import { IState, IAction } from "interface";

// localStorage에서 todoList, doneList item 불러오기
const todoStorage = localStorage.getItem("todoList");
const doneStorage = localStorage.getItem("doneList");

let loadTodo = todoStorage ? JSON.parse(todoStorage) : [];
let loadDone = doneStorage ? JSON.parse(doneStorage) : [];

// 전역 데이터의 초기값
const initialState = {
  todoList: loadTodo,
  doneList: loadDone,
  dispatch: () => {},
};

const TodoContext = createContext<IState>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  const { type, value } = action;
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, value],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((_, todoIdx) => todoIdx !== value),
      };
    case "ADD_DONE":
      return {
        ...state,
        doneList: [...state.doneList, value],
      };
    case "DELETE_DONE":
      return {
        ...state,
        doneList: state.doneList.filter((_, todoIdx) => todoIdx !== value),
      };
    default:
      throw new Error();
  }
};

interface IContextProps {
  children: JSX.Element;
}

const TodoProvider = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider
      value={{
        todoList: state.todoList,
        doneList: state.doneList,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
