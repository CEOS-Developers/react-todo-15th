import "./style.css";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";
import TodoInputForm from "./TodoInputForm";

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
    <div>
      <main className="container">
        <TodoInputForm
          text={newTodoText}
          setText={setNewTodoText}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <TodoList
          todoList={todoList}
          doneList={doneList}
          setTodoList={setTodoList}
          setDoneList={setDoneList}
        />
        <DoneList
          todoList={todoList}
          doneList={doneList}
          setTodoList={setTodoList}
          setDoneList={setDoneList}
        />
      </main>
    </div>
  );
};

export default App;
