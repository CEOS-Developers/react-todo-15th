import React from 'react';
import { useState } from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todo 1',
      idDone: true,
    },
    {
      id: 2,
      text: 'Todo 2',
      isDone: false,
    },
    {
      id: 3,
      text: 'Todo 3',
      idDone: true,
    },
  ]);
  return (
    <Template>
      <TodoList todos={todos} />
    </Template>
  );
};

export default App;

// importing React 와 JSX 사용의 상관관계
// https://hwani.dev/import-react/

// children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달
