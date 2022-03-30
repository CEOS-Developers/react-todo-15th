import { useState } from "react";
import './background.js';
import Clock from './clock';
import Todobox from "./ToDo";
import Donebox from "./Done"; 
import styled  from "styled-components";
import InputForm from "./Inputform";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [doneToDoList, setDoneToDoList] = useState([]);

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
  
    <InputForm 
    toDoList={toDoList} 
    setToDoList ={setToDoList}/>
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
