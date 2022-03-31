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
  const { type, todo, idx } = action;
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: todo ? [...state.todoList, todo] : state.todoList,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((_, todoIdx) => todoIdx !== idx),
      };
    case "ADD_DONE":
      return {
        ...state,
        doneList: todo ? [...state.doneList, todo] : state.doneList,
      };
    case "DELETE_DONE":
      return {
        ...state,
        doneList: state.doneList.filter((_, todoIdx) => todoIdx !== idx),
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
