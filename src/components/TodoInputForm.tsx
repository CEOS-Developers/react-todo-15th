import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { ITodoInputProps } from "../interface";

const TodoInputForm = ({ todoList, setTodoList }: ITodoInputProps) => {
  const [newText, setNewText] = useState("");

  const handleTextChange = useCallback(({ target }) => {
    setNewText(target.value);
  }, []);

  // todo item 추가
  const _addTodoItem = useCallback(
    (e) => {
      e.preventDefault();

      if (newText) {
        // todo item 생성
        const todoId = new Date().getTime();
        const todoObj = {
          id: todoId,
          text: newText,
        };

        // list에 todo item 추가
        setTodoList([...todoList, todoObj]);
        setNewText("");
      }
    },
    [newText, todoList, setTodoList],
  );

  return (
    <TitleContents>
      <TodoTitle>📝 투두리스트</TodoTitle>
      <TodoInputItems>
        <TodoInput
          placeholder="할 일을 입력하세요"
          value={newText}
          onChange={handleTextChange}
        />
        <TodoInputBtn type="submit" onClick={_addTodoItem}>
          +
        </TodoInputBtn>
      </TodoInputItems>
    </TitleContents>
  );
};

const TitleContents = styled.section`
  padding-bottom: 15px;
  border-bottom: 1px solid lightgrey;
`;
const TodoTitle = styled.h2`
  padding-left: 20px;
`;
const TodoInputItems = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
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

export default React.memo(TodoInputForm);
