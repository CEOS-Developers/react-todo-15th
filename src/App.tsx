import { useState, useEffect, useCallback } from "react";
import TodoList from "./components/TodoList";
import TodoInputForm from "./components/TodoInputForm";
import styled from "styled-components";

const todoStorage = localStorage.getItem("todoList");
const doneStorage = localStorage.getItem("doneList");

let loadTodo = todoStorage ? JSON.parse(todoStorage) : [];
let loadDone = doneStorage ? JSON.parse(doneStorage) : [];

const App = () => {
  const [todoList, setTodoList] = useState(loadTodo);
  const [doneList, setDoneList] = useState(loadDone);

  // save to localStorage
  const _saveLocalStorage = useCallback((type, list) => {
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
        <TodoInputForm todoList={todoList} setTodoList={setTodoList} />
        <TodoList
          type="todo"
          currentList={todoList}
          toggleList={doneList}
          setCurrentList={setTodoList}
          setToggleList={setDoneList}
        />
        <TodoList
          type="done"
          currentList={doneList}
          toggleList={todoList}
          setCurrentList={setDoneList}
          setToggleList={setTodoList}
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
