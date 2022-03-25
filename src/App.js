import React from "react";
import "./App.css";
import Title from "./Title.js";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import { useState } from "react";
import { useRef } from "react";
/*import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`*/

/*

  const deleteTodo = useCallback((id) => {
    todo = todo.filter((toDo) => toDo.id !== Number(id));
  })

  const toggleTodo = useCallback((id) => {
    todo.forEach((element) => {
      if (element.id === Number(id)) {
        element.done = !element.done;
      }
  })
*/
function App() {
  const [input, setInput] = useState({
    text: ""
  });
  const { text } = input;
  const onChange = (e) => {
    const { text } = e.target;
    setInput({
      ...input,
      [text]: text
    });
  };
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "make code runnable",
      done: false
    },
    {
      id: 2,
      text: "refactorying code",
      done: false
    },
    {
      id: 3,
      text: "study useeffect",
      done: false
    }
  ]);

  const nextId = useRef(4);
  const onClick = (e) => {
    const todo = {
      id: nextId.current,
      text: e.target.value,
      done: false
    };

    setTodos(todos.concat(todo));

    setInput({
      text: ""
    });
    nextId.current++;
  };

  const onRemove = (key) => {
    setTodos(todos.filter((todo) => todo.id !== key));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="App">
      <Title />
      <TodoInput text={text} onChange={onChange} onClick={onClick} />
      <TodoList
        onChange={onChange}
        onRemove={onRemove}
        onToggle={onToggle}
        todos={todos}
      />
    </div>
  );
}

export default App;
