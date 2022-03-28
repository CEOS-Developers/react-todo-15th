import { useEffect, useCallback } from "react";
import styled from "styled-components";
import { TodoInputForm, TodoList } from "./components";
import { useTodoList, useDoneList } from "./hooks";

const todoStorage = localStorage.getItem("todoList");
const doneStorage = localStorage.getItem("doneList");

let loadTodo = todoStorage ? JSON.parse(todoStorage) : [];
let loadDone = doneStorage ? JSON.parse(doneStorage) : [];

const App = () => {
  const { todoList, _addTodoList, _deleteTodoList } = useTodoList(loadTodo);
  const { doneList, _addDoneList, _deleteDoneList } = useDoneList(loadDone);

  // save to localStorage
  const _saveLocalStorage = useCallback((type: string, list: object): void => {
    localStorage.setItem(type, JSON.stringify(list));
  }, []);

  // list가 변할 때마다 localStorage에 list 저장
  useEffect(() => {
    _saveLocalStorage("todoList", todoList);
  }, [todoList, _saveLocalStorage]);
  useEffect(() => {
    _saveLocalStorage("doneList", doneList);
  }, [doneList, _saveLocalStorage]);

  return (
    <Container>
      <Box>
        <TodoInputForm addTodoList={_addTodoList} />
        <TodoList
          type="todo"
          currentList={todoList}
          deleteCurrentList={_deleteTodoList}
          addToggleList={_addDoneList}
        />
        <TodoList
          type="done"
          currentList={doneList}
          deleteCurrentList={_deleteDoneList}
          addToggleList={_addTodoList}
        />
      </Box>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.main`
  width: 350px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 30px grey;
`;

export default App;
