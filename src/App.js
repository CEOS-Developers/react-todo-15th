import React from 'react';
import './App.css';
import Template from './components/Template';
import Template from './components/TodoList';

const App = () => {
  return (
    <Template>
      <TodoList />
    </Template>
  );
};

export default App;

// importing React 와 JSX 사용의 상관관계
// https://hwani.dev/import-react/

// children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달
