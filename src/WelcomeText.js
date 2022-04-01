import React from "react";
import styled from 'styled-components';

const WelcomBox = styled.div`
    font-family: sans-serif;
    text-align: left;
    margin: 20px 20px 20px 20px;
`;

const WelcomTitle = styled.div`
    font-family: sans-serif;
    text-align: left;
    margin: 20px 20px 20px 20px;
    width: 100vw;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.2rem;
    font-weight: Bold;
`; 

const WelcomText = styled.div`
    font-family: sans-serif;
    text-align: left;
    margin: 20px 20px 20px 20px;
    width: 100%;
    display: block;
`; 

const TitleInfo = styled.span`
    font-family: sans-serif;
    text-align: left;
    display: span;
`;

const TitleName = styled.span`
    font-family: sans-serif;
    text-align: left;
    padding-left: 20px;
    display: span;
    color: blue;
`;

const WelcomeText = () => {
  return (
    <WelcomBox>
      <WelcomTitle>
        <TitleInfo>집중해서 마치는 오늘 할 일</TitleInfo>
        <TitleName>기어업</TitleName>
      </WelcomTitle>
      <WelcomText>
        기어업은 스스로 집중해서 일을 끝내고싶은 사람들을 위해 여기 있어요.
        오늘도 함께 할 일을 시작해볼까요?
      </WelcomText>
    </WelcomBox>
  );
};

export default WelcomeText;
