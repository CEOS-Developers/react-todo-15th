import { TodoContext } from "contexts";
import { ITodoItem } from "interface";
import { useContext } from "react";

const useTodo = () => {
  const { todoList, doneList, dispatch } = useContext(TodoContext);

  const addTodo = (todo: ITodoItem): void => {
    dispatch({
      type: "ADD_TODO",
      todo,
    });
  };

  const deleteTodo = (idx: number): void => {
    dispatch({
      type: "DELETE_TODO",
      idx,
    });
  };

  const addDone = (todo: ITodoItem): void => {
    dispatch({
      type: "ADD_DONE",
      todo,
    });
  };

  const deleteDone = (idx: number): void => {
    dispatch({
      type: "DELETE_DONE",
      idx,
    });
  };

  return { todoList, doneList, addTodo, deleteTodo, addDone, deleteDone };
};

export default useTodo;
