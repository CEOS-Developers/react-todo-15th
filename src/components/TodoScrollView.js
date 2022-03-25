import React, { useRef } from "react";
import styled from "styled-components";

import TodoListTemplate from "./TodoListTemplate";

const ScrollViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow-y: scroll;
  margin-bottom: 5px;
`;

const ScrollViewHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6px 0px 10px 0px;
`;

const ScrollViewDate = styled.div`
  font-size: 9px;
  font-weight: 300;
  color: white;
  padding: 4px 10px;
  border-radius: 15px;
  background: #93a5b3;
`;

const TodoScrollView = ({ date, todos, toggleTodo, deleteTodo }) => {
  return (
    <ScrollViewWrapper>
      <ScrollViewHeader>
        <ScrollViewDate>
          {date.getFullYear() +
            "년 " +
            (date.getMonth() + 1) +
            "월 " +
            date.getDate() +
            "일 " +
            "일월화수목금토".charAt(date.getUTCDay()) +
            "요일"}
        </ScrollViewDate>
      </ScrollViewHeader>

      <TodoListTemplate
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </ScrollViewWrapper>
  );
};

export default TodoScrollView;
