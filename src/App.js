import "./style.css";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoInputForm from "./TodoInputForm";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR", sans-serif;
  background: linear-gradient(to bottom right, #7f7fd5, #86a8e7, #91eae4);
`;
const Box = styled.main`
  width: 350px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 30px grey;
`;

const App = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  // save to localStorage
  const _saveLocalStorage = (type, list) => {
    localStorage.setItem(type, JSON.stringify(list));
  };

  // 렌더링 시 localStorage에서 todo list 불러오기
  useEffect(() => {
    const todoStorage = localStorage.getItem("todoList");
    const doneStorage = localStorage.getItem("doneList");

    // localStorage에 저장된 list가 있는지 확인
    if (todoStorage) {
      const loadTodo = JSON.parse(todoStorage);
      setTodoList(loadTodo);
    }
    if (doneStorage) {
      const loadDone = JSON.parse(doneStorage);
      setDoneList(loadDone);
    }
  }, []);

  // list가 변할 때마다 localStorage에 list 저장
  useEffect(() => {
    _saveLocalStorage("todoList", todoList);
  }, [todoList]);
  useEffect(() => {
    _saveLocalStorage("doneList", doneList);
  }, [doneList]);

  return (
    <Container>
      <Box>
        <TodoInputForm
          text={newTodoText}
          setText={setNewTodoText}
          todoList={todoList}
          setTodoList={setTodoList}
        />
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

export default App;
