import styled, { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';

function App() {
  const [savedList, setSavedList] = useState([]);
  const handleTodoInsert = (text: string) => {
    if (text) {
      const todo = {
        id: Date.now().toString(),
        text,
        isDone: false,
      };
      setSavedList((savedList) => [...savedList, todo]);
    }
  };
  return (
    <Wrapper>
      <GlobalStyle />
      <Main>
        <Form handleTodoInsert={handleTodoInsert} />
        <MainTitle>할 일 목록</MainTitle>
        <TodoList
          isDoneList={false}
          savedList={savedList}
          setSavedList={setSavedList}
        />
        <TodoList
          isDoneList={true}
          savedList={savedList}
          setSavedList={setSavedList}
        />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
  *{  
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    font-size : 16px;
  }
  body {
    background-color : #F6FFDB;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 99%;
  }
`;

const Main = styled.div`
  width: 27rem;
  height: 50rem;
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 2rem;
  padding: 1.5rem 2rem 1.5rem 2rem;
`;

const MainTitle = styled.h1`
  height: 2rem;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
`;

export default App;
