import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import DarkmodeBtn from "./DarkmodeBtn";
import TodoScreen from "./components/TodoScreen";
import TodoMockup from "./components/TodoMockup";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #333333;

    ${({ darkMode }) =>
      darkMode &&
      `
      color: white;
    `}
  }

  * {
    font-family: "애플 SD 산돌고딕 Neo", "Apple SD Gothic Neo", "맑은 고딕",
      "Malgun Gothic", sans-serif;
  }

  *{
    -ms-overflow-style: none;
  }
  
  ::-webkit-scrollbar {
      display: none;
  }
`;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);

  ${({ darkMode }) =>
    darkMode &&
    `
    background-image: linear-gradient(86deg, #32154a 0%, #5f6494 50%);
  `}
`;

const HeaderDiv = styled.footer`
  position: absolute;
  top: 40px;
  left: 40px;
  text-align: left;

  font-size: 24px;
  font-weight: 300;
  color: #333333;

  ${({ darkMode }) =>
    darkMode &&
    `
    color: white;
  `}
`;

const ContentDiv = styled.div`
  display: flex;
`;

const FooterDiv = styled.footer`
  position: absolute;
  bottom: 40px;
  right: 40px;
  text-align: right;

  font-size: 13px;
  font-weight: 200;
  color: #333333;

  ${({ darkMode }) =>
    darkMode &&
    `
    color: white;
  `}
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <WrapperDiv darkMode={darkMode}>
      <GlobalStyle darkMode={darkMode} />
      <HeaderDiv darkMode={darkMode}>
        <strong>카카오톡 - 나와의 대화</strong>
        <br />
        (사실상 메모장 📔)
      </HeaderDiv>

      <TodoMockup />
      <DarkmodeBtn darkMode={darkMode} setDarkMode={setDarkMode} />
      <ContentDiv>
        <TodoScreen darkMode={darkMode} />
      </ContentDiv>

      <FooterDiv darkMode={darkMode}>
        <section>
          <strong>💖 CEOS 15 FRONTEND</strong>
        </section>
        <a
          href="https://github.com/poodlepoodle/react-todo-15th"
          target="_blank"
        >
          github.com/poodlepoodle/react-todo-15th
        </a>
      </FooterDiv>
    </WrapperDiv>
  );
};

export default App;
