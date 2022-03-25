import React from 'react';
import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

let nextId = 4;

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todo 1',
      isDone: false,
    },
    {
      id: 2,
      text: '할 일 2',
      isDone: true,
    },
    {
      id: 3,
      text: 'long input test long input test long input test',
      isDone: false,
    },
  ]);
  const doneCnt = todos.filter((todo) => todo.isDone).length;
  const todoCnt = todos.length - doneCnt;
  const [targetTodo, setTargetTodo] = useState(null);

  const onInsertTodo = (text) => {
    if (text === '') return;
    const todo = {
      id: nextId,
      text,
      isDone: false,
    };
    setTodos((todos) => todos.concat(todo));
    ++nextId;
  };

  const onIsDoneToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onChangeTargetTodo = (todo) => {
    setTargetTodo(todo);
  };

  const onRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    setTargetTodo(null);
  };

  return (
    <div className="Screen">
      <div className="Container">
        <TodoList
          todos={todos}
          doneCnt={doneCnt}
          todoCnt={todoCnt}
          onIsDoneToggle={onIsDoneToggle}
          onChangeTargetTodo={onChangeTargetTodo}
          onRemove={onRemove}
        />
        <TodoInsert onInsertTodo={onInsertTodo} targetTodo={targetTodo} />
      </div>
    </div>
    /*
     ** <Tag hierarchy>
     **
     ** Screen
     **  ㄴ Container
     **     ㄴ TodoList
     **        ㄴ TodoTitle (header)
     **        ㄴ TodoItem (section)
     **           ㄴ Content (flex-container)
     **              ㄴ CheckButton (flex-container), Text, EditButton, DeleteButton
     **    ㄴ TodoInsert
     **       ㄴ Form
     **          ㄴ input, SubmitButton
     */
  );
};

export default App;

/*
 ** <Reference>
 **
 ** importing React 와 JSX 사용의 상관관계
 ** https://hwani.dev/import-react/
 **
 ** React icons
 ** https://react-icons.github.io/react-icons/
 **
 ** How can I interpolate JSX with an expression in a string?
 ** https://stackoverflow.com/questions/30372538/how-can-i-interpolate-jsx-with-an-expression-in-a-string
 **
 ** React className naming convention
 ** https://stackoverflow.com/questions/57221878/react-classname-naming-convention
 */
