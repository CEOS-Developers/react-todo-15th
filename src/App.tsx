import { useState } from "react";
import './background.js';
import Clock from './clock';
import Todobox from "./ToDo";
import Donebox from "./Done"; 
import styled  from "styled-components";
import InputForm from "./Inputform";
import React = require("react");
import {Container, InputBox} from "./BoxDesign";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [doneToDoList, setDoneToDoList] = useState([]);



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
      ItemList = {toDoList} 
      setToDoList ={setToDoList}/>
       <hr/>

      <Donebox 
      type = "Done"
      setDoneToDoList ={setDoneToDoList} 
      ItemList = {doneToDoList} 
      setToDoList ={setToDoList}/>
     </Container>
</div>
   
  );
  
}

export default App;
