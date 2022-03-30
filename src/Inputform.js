import {useState } from "react";
import styled  from "styled-components";

function Inputform ({toDoList,setToDoList}){

    const [toDo, inputToDo] = useState("");
  
    const onChange = (event) => inputToDo(event.target.value);

    const submitInput = (event) => {
      event.preventDefault();
      
      if (toDo) {
        setToDoList((toDoArray) => [toDo, ...toDoArray]); //입력받은 걸 배열에 넣음
      }
      inputToDo("");
    };
    
    const Input = styled.input
      `
      font-family: 'SuncheonB';
      width: 300px;
      height: 50px;
      border-radius: 9px;

      
      `
      
      const ToDoButton = styled.span
      `
      cursor: pointer;
      margin-left :5px;
      `
      
      const Form = styled.form
      `
      margin-bottom: 10px;
      `
      ;

      return(
      <Form onSubmit={submitInput} >
        <Input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일을 입력하세요"
          autoFocus = "autoFocus"
          spellCheck="false"
        
        />
        <ToDoButton onClick={submitInput}>+</ToDoButton>
      </Form>
      );
        
      



}


export default Inputform;
