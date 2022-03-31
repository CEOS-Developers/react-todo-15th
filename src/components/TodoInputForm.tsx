import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "contexts";
import { useInput } from "hooks";

const TodoInputForm = () => {
  const { dispatch } = useContext(TodoContext);
  const { text, _handleTextChange, _resetText } = useInput("");

  // todo item 추가
  const _addTodoItem = useCallback(
    (e: React.FormEvent): void => {
      e.preventDefault();

      if (text.trim()) {
        // list에 todo item 추가
        dispatch({
          type: "ADD_TODO",
          value: { text },
        });
      }
      _resetText();
    },
    [text, _resetText, dispatch],
  );

  return (
    <TodoInputItems onSubmit={_addTodoItem}>
      <TodoInput
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={_handleTextChange}
      />
      <TodoInputBtn type="submit">+</TodoInputBtn>
    </TodoInputItems>
  );
};

const TodoInputItems = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid lightgrey;
`;
const TodoInput = styled.input`
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 15px;
  width: 230px;
  :focus {
    outline: none;
    transition: 0.2s;
    box-shadow: 0px 0px 5px lightgrey;
  }
`;
const TodoInputBtn = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 30px;
  :hover {
    color: grey;
    transition: 0.2s;
  }
`;

export default TodoInputForm;
