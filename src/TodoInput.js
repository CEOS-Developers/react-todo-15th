import React from "react";

const TodoInput = ({ input, onClick, onChange }) => {
  return (
    <div id="InputBox" className="Box">
      <label htmlFor="TodoInput" id="InputText">
        오늘도 좋은 하루예요.
      </label>
      <div id="InputField">
        <input
          onChange={onChange}
          text={input}
          id="TodoInput"
          type="text"
          placeholder="이번에 할 일은.."
        />
        <button id="TodoBtn" onClick={onClick}>
          +
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
