import React, { Component } from "react";
import styled from "styled-components";
import TodoScreen from "./components/TodoScreen";
import TodoMockup from "./components/TodoMockup";

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

  font-family: Helvetica, Arial, sans-serif;
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
    <WrapperDiv className="app">
      <HeaderDiv className="app-header">
        <strong>카카오톡 - 나와의 대화</strong>
        <br />
        (사실상 메모장 📔)
      </HeaderDiv>

      <TodoMockup />
      <ContentDiv>
        <TodoScreen />
      </ContentDiv>

      <FooterDiv className="app-footer">
        <section>
          💖 <strong>CEOS 15 FRONTEND</strong>
        </section>
        <a href="https://github.com/poodlepoodle" target="_blank">
          ✨ github.com/poodlepoodle
        </a>
      </FooterDiv>
    </WrapperDiv>
  );
};

export default App;
