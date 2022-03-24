import React, { useState } from "react";

const InputContainer = (props) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (text !== "") {
      const uid = new Date().getTime().toString();
      props.clickHandler("ADD", uid, "todo", text);
      setText("");
    }
  };

  return (
    <div className="appInput">
      <div className="appTitle">
        <h3>투두 투두</h3>
      </div>
      <form className="formControl" onSubmit={(e) => submitHandler(e)}>
        <input
          className="formInput"
          type="text"
          id="todoItem"
          placeholder="오늘은 행복하길 바래"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit" className="submitBtn">
          <p>+</p>
        </button>
      </form>
    </div>
  );
};

export default InputContainer;
