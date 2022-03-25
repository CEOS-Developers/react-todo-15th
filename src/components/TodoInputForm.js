import React from "react";
import styled from "styled-components";

import icon_arrow from "../assets/black-icons/arrow.png";

const InputWrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 8px 13px 0px 13px;
  z-index: 1000 !important;
`;

const TodoInputWrapperForm = styled.main`
`;

const TodoInput = styled.input`
  text-align: left;
  border-color: transparent;
  /* box-shadow: 1px 1px 2px 1px #ffa50033; */
  border-radius: 10px;
  outline: none;
  
  width : 220px;
  height: 30px;
  padding: 0 0 0 10px;
  
  background-color: #ededed;
  font-size: 11px;
  font-weight: 400;
`;

const TodoInputSend = styled.div`
  width: 26px;
  height: 26px;
  object-fit: contain;
`;

const TodoInputSendImg = styled.img`
  width: 26px;
  height: 26px;
  object-fit: cover;
`;

const TodoInputForm = (props) => {
  return (
    <InputWrapper>
      <TodoInputWrapperForm>
        <TodoInput type="text" placeholder="일정을 입력해 주세요!" />
      </TodoInputWrapperForm>
      <TodoInputSend>
        <TodoInputSendImg src={icon_arrow} />
      </TodoInputSend>
    </InputWrapper>
  );
};

export default TodoInputForm;
