import React from 'react';
import './App.css';
import { useState } from 'react';
import Screen from './components/Screen';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

let nextId = 4;

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todo 1',
      isDone: true,
    },
    {
      id: 2,
      text: '투두 2',
      isDone: false,
    },
    {
      id: 3,
      text: 'Todo 3',
      isDone: true,
    },
  ]);

  const onInsertTodo = (text) => {
    if (text === '') {
      return alert('text === ""');
    } else {
      const todo = {
        id: nextId,
        text,
        isDone: false,
      };
      setTodos((todos) => todos.concat(todo));
      ++nextId;
    }
  };

  // search by clicked id
  const onIsDoneToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Screen todoLength={todos.length}>
      <TodoList todos={todos} onIsDoneToggle={onIsDoneToggle} />
      <TodoInsert onInsertTodo={onInsertTodo} />
    </Screen>
  );
};

export default App;

// importing React 와 JSX 사용의 상관관계
// https://hwani.dev/import-react/

// children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달

// react icons
// https://react-icons.github.io/react-icons/
