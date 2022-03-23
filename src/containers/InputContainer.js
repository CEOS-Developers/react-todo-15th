import React, { useState } from "react";

const InputContainer = () => {
  return (
    <div className="todoInput">
      <div className="todoTitle">
        <h3>투두 투두</h3>
      </div>
      <form className="formControl">
        <input
          className="formInput"
          type="text"
          id="todoItem"
          placeholder="오늘은 행복하길 바래"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="submitBtn">
          <p>+</p>
        </button>
      </form>
    </div>
  );
};

export default InputContainer;
