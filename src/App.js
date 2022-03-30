import { useState } from "react";
import './style.css';
import './background.js';
import Clock from './clock';
import Todobox from "./ToDo";
import Donebox from "./Done"; 
import styled  from "styled-components";
import InputForm from "./Inputform";

function App() {
  const [toDo, inputToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [doneToDoList, setDoneToDoList] = useState([]);

  
  //inputToDo를 통해 입력받음
  const onChange = (event) => inputToDo(event.target.value);

  const submitInput = (event) => {
      event.preventDefault();
      if (toDo) {
        setToDoList((currentArray) => [toDo, ...currentArray]); //입력받은 걸 배열에 넣음
      }
      inputToDo("");

    };

    const Container = styled.div
      `
      text-align: center;
      width: 360px;
      height: 600px;
      background-color: white;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid grey;
      border-radius: 9px;
  `
    ;

    const InputBox = styled.header
    `
    font-family: 'SuncheonB';
    flex: 0.3;
    border-bottom: 1px solid grey;
    
    `
    ;

  

  return (
    <div>
    <Clock/>
    <Container>
      <h1>❗투두리스트❗</h1>
     <InputBox>
    
     
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
    </InputBox>

      <hr/>
      
      <Todobox
      type = "Todo" 
      setDoneToDoList ={setDoneToDoList} 
      toDoList = {toDoList} 
      setToDoList ={setToDoList}/>
<hr/>
      <Donebox 
      type = "Done"
      setDoneToDoList ={setDoneToDoList} 
      doneToDoList = {doneToDoList} 
      setToDoList ={setToDoList}/>
     </Container>


</div>
  );
}

export default App;
