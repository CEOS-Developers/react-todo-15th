import React from 'react';
import { useState } from 'react';
import Screen from './components/Screen';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

let nextId = 4;

const App = () => {
  const [targetTodo, setTargetTodo] = useState(null);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todo 1',
      isDone: false,
    },
    {
      id: 2,
      text: '투두 2',
      isDone: false,
    },
    {
      id: 3,
      text: 'long input test long input test long input test',
      isDone: true,
    },
  ]);
  const doneCnt = todos.filter((todo) => todo.isDone).length;
  const todoCnt = todos.length - doneCnt;

  const onInsertTodo = (text) => {
    if (text === '') {
      return;
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
    // <Screen todoLength={todos.length}>
    <Screen doneCnt={doneCnt} todoCnt={todoCnt}>
      <TodoList
        todos={todos}
        onIsDoneToggle={onIsDoneToggle}
        onChangeTargetTodo={onChangeTargetTodo}
        onRemove={onRemove}
      />
      <TodoInsert onInsertTodo={onInsertTodo} targetTodo={targetTodo} />
    </Screen>
    /*
     ** <Tag hierarchy>
     **
     ** Screen
     **  ㄴ Title (header)
     **  ㄴ Container (section)
     **     ㄴ TodoList
     **        ㄴ TodoItem
     **           ㄴ Content
     **              ㄴ CheckButton, Text, EditButton, DeleteButton
     **        ㄴ
     **     ㄴ TodoInsert
     **        ㄴ Form
     **           ㄴ input, SubmitButton
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
