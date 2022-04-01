import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import WelcomeText from "./WelcomeText.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList";

export default function App() {
  const TODO = 'todos';
  const [input, setInput] = useState("입력없음");
  const [todos, setTodos] = useState([
    {
      text: "디버깅 완료하기",
      id: 1,
      done: false
    },
    {
      text: "코드 리팩토링하기",
      id: 2,
      done: false
    },
    {
      text: "타입스크립트 이해하기",
      id: 3,
      done: false
    }
  ]);

  useEffect(() => {
    const loadStorage = localStorage.getItem(TODO);
    if (loadStorage) {
      const loadTodo = JSON.parse(loadStorage);
      setTodos(loadTodo);
    }
  }, []);

  useEffect(() => {
    console.log('save is running');
    localStorage.setItem(TODO, JSON.stringify(todos));
  }, [todos]);

  const nextId = useRef(4);
  /*저장된 할 일의 목록 */

  function changeInput(event) {
    const value = event.target.value;
    setInput(value);
    console.log(value);
  }

  function clickButton(event) {
    const todo = {
      text: input,
      id: nextId.current,
      done: false
    };
    nextId.current++;
    setTodos([...todos, todo]);
    console.log(todos);
  }

  function todoToggle(event) {
    const key = event.target.id;
    console.log(key);
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === Number(key)
          ? { text: todo.text, id: todo.id, done: !todo.done }
          : todo
      )
    );
    console.log("Toggle.");
  }

  function todoDelete(event) {
    const key = event.target.id;
    setTodos(todos.filter((todo) => todo.id !== Number(key)));
    console.log("Delete.");
  }

  return (
    <div className="App">
      <WelcomeText />
      <TodoInput input={input} onClick={clickButton} onChange={changeInput} />
      <TodoList todos={todos} onToggle={todoToggle} onDelete={todoDelete} />
    </div>
  );
}
