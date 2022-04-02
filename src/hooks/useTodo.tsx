import { TodoContext } from "contexts";
import { ITodoItem } from "interface";
import { useContext } from "react";

const useTodo = () => {
  const { todoList, doneList, dispatch } = useContext(TodoContext);

  const _addTodo = (todo: ITodoItem): void => {
    dispatch({
      type: "ADD_TODO",
      todo,
    });
  };

  const _deleteTodo = (idx: number): void => {
    dispatch({
      type: "DELETE_TODO",
      idx,
    });
  };

  const _addDone = (todo: ITodoItem): void => {
    dispatch({
      type: "ADD_DONE",
      todo,
    });
  };

  const _deleteDone = (idx: number): void => {
    dispatch({
      type: "DELETE_DONE",
      idx,
    });
  };

  return { todoList, doneList, _addTodo, _deleteTodo, _addDone, _deleteDone };
};

export default useTodo;
