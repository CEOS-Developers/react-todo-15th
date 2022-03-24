import React from 'react';
import { useState } from 'react';
import './App.css';
import Screen from './components/Screen';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할 일 1',
      isDone: true,
    },
    {
      id: 2,
      text: 'Todo 2',
      isDone: false,
    },
    {
      id: 3,
      text: 'Todo 3',
      isDone: true,
    },
  ]);
  return (
    <Screen todoLength={todos.length}>
      <TodoList todos={todos} />
    </Screen>
  );
};

export default App;

// importing React 와 JSX 사용의 상관관계
// https://hwani.dev/import-react/

// children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달

// react icons
// https://react-icons.github.io/react-icons/
