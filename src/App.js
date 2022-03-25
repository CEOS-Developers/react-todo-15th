import styled, { createGlobalStyle } from 'styled-components';

import Todo from './components/Todo';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Main>
        <MainTitle>할 일 목록</MainTitle>
        <Todo />
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
