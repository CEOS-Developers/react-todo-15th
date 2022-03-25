import React from "react";
import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import TodoScreen from "./components/TodoScreen";
import TodoMockup from "./components/TodoMockup";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #333333;
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
`;

const HeaderDiv = styled.footer`
  position: absolute;
  top: 40px;
  left: 40px;
  text-align: left;

  font-size: 24px;
  font-weight: 300;
  color: #333333;
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
`;

const App = () => {
  return (
    <WrapperDiv className="app-wrapper">
      <GlobalStyle />
      <HeaderDiv className="app-header">
        <strong>카카오톡 - 나와의 대화</strong>
        <br />
        (사실상 메모장 📔)
      </HeaderDiv>

      <TodoMockup />
      <ContentDiv className="app-content">
        <TodoScreen />
      </ContentDiv>

      <FooterDiv className="app-footer">
        <section>
          <strong>CEOS 15 FRONTEND</strong>
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
