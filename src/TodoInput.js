import React from "react";
import "./App.css";

const TodoInput = ({ text, onChange, onClick }) => {
  return (
    <div className="input-box">
      <h3>오늘도 좋은 하루예요.</h3>
      <input
        type="text"
        id="todo-input"
        placeholder="오늘 할 일을 입력하세요."
        onChange={onChange}
      />
      <input type="button" onClick={onClick} />
    </div>
  );
};

export default TodoInput;
