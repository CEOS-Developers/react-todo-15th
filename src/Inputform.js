import { useState } from "react";
//import React = require("react");

function Inputform (toDo, toDoList, inputToDo, setToDoList){

    //const [toDo, inputToDo] = useState("");
    //const [toDoList, setToDoList] = useState([]);

    const submitInput = (event) => {
        event.preventDefault();
        if (toDo) {
          setToDoList((currentArray) => [toDo, ...currentArray]); //입력받은 걸 배열에 넣음
        }
        inputToDo("");
  
      };

      return(
      <form onSubmit={submitInput} >
      
        <input
          className = "toDo"
          onChange={e => inputToDo(e.target.value)}
          value={toDo}
          type="string"
          placeholder="할 일을 입력하세요"
        
        />
  
        <span className = "toDoButton" onClick={submitInput}> +</span>
      </form>
      );
        
      
}

export default Inputform;
