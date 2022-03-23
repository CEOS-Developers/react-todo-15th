import React from "react";

const InputContainer = () => {
  return (
    <div class="todoInput">
      <div class="todoTitle">
        <h3>투두 투두</h3>
      </div>
      <form class="formControl">
        <input
          class="formInput"
          type="text"
          id="todoItem"
          placeholder="오늘은 행복하길 바래"
        />
        <button type="submit" class="submitBtn">
          <p>+</p>
        </button>
      </form>
    </div>
  );
};

export default InputContainer;
