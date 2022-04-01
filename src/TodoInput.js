import React from "react";
import styled from 'styled-components';

const InputBox = styled.div`
    font-family: sans-serif;
    text-align: left;
    margin: 20px 20px 20px 20px;
    width: 80%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const InputField = styled.div`
    font-family: sans-serif;
    text-align: left;
    margin: 20px 20px 20px 20px;
`;

const InputText = styled.label`
    font-family: sans-serif;
    text-align: left;
    width: 100%;
    font-size: 1.2rem;
    font-weight: Bold;
`;

const TodoInput = styled.input`
    font-family: sans-serif;
    text-align: left;
`;

const TodoBtn = styled.button`
    font-family: sans-serif;
    text-align: left;
    margin: 20px 20px 20px 20px;
`;

const TodoInput = ({ input, onClick, onChange }) => {
  return (
    <InputBox>
      <InputText htmlFor="TodoInput" >
        오늘도 좋은 하루예요.
      </InputText>
      <InputField>
        <TodoInput
          onChange={onChange}
          text={input}
          id="TodoInput"
          type="text"
          placeholder="이번에 할 일은.."
        />
        <TodoBtn onClick={onClick}>
          +
        </TodoBtn>
      </InputField>
    </InputBox>
  );
};

export default TodoInput;
