import React from "react";
import styled from "styled-components";

import StatusBar from "./TodoStatusBar";
import Title from "./TodoTitle";
import InputForm from "./TodoInputForm";
import ScrollView from "./TodoScrollView";

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 300px;
  height: 650px;
  overflow: hidden;

  color: black;
  text-align: center;
  border-radius: 30px;
  background: #abc2d0;
`;

const ScreenHeader = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;

const ScreenContent = styled.main`
  flex: 7;
  width: 100%;
  z-index: 1000 !important;
`;

const ScreenFooter = styled.footer`
  flex: 0.9;
  width: 100%;
  background: white;
  z-index: 1000 !important;
`;

const TodoScreen = (props) => {
  return (
    <ScreenWrapper>
      <ScreenHeader>
        <StatusBar />
        <Title />
      </ScreenHeader>

      <ScreenContent>
        <ScrollView />
      </ScreenContent>

      <ScreenFooter>
        <InputForm />
      </ScreenFooter>
    </ScreenWrapper>
  );
};

export default TodoScreen;
