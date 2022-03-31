import React from 'react';
import { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import styled from 'styled-components';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

let gNextId = 4;

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

  const handleIsDoneToggle = (id) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const handleRemoveTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleTodoInsert = (text) => {
    if (text) {
      const todo = {
        id: gNextId,
        text,
        isDone: false,
      };
      setTodos((todos) => todos.concat(todo));
      ++gNextId;
    }
  };

  const doneCnt = todos.filter((todo) => todo.isDone).length;
  const todoCnt = todos.length - doneCnt;

  return (
    <>
      <GlobalStyle />
      <Screen>
        <Wrapper>
          <TodoList
            todos={todos}
            doneCnt={doneCnt}
            todoCnt={todoCnt}
            handleIsDoneToggle={handleIsDoneToggle}
            handleRemoveTodo={handleRemoveTodo}
          />
          <TodoInsert handleTodoInsert={handleTodoInsert} />
        </Wrapper>
      </Screen>
    </>
    /*
     ** <Component hierarchy>
     **
     **        App
     **       /   \
     ** TodoList  TodoInsert
     **    |
     ** TodoItem
     **
     **
     ** <Tag hierarchy>
     **
     ** Screen
     **  ㄴ Wrapper
     **     ㄴ [TodoList]
     **        ㄴ TodoHeader
     **        ㄴ TodoSection
     **           ㄴ TodoItem
     **              ㄴ Wrapper
     **                 ㄴ Content
     **                    ㄴ CheckButton, Text, DeleteButton
     **        ㄴ DoneHeader
     **        ㄴ DoneSection
     **           ㄴ TodoItem
     **              ㄴ Wrapper
     **                 ㄴ Content
     **                    ㄴ CheckButton, Text, DeleteButton
     **     ㄴ [TodoInsert]
     **        ㄴ Form
     **           ㄴ Input, SubmitButton
     */
  );
};

const Screen = styled.div`
  width: 360px;
  height: 600px;
  background: #fff;

  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 0 0 25px rgba(105, 85, 85, 0.5);
`;

const Wrapper = styled.div`
  margin: 0% 4.5%;
`;

export default App;
