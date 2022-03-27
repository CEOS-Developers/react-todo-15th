import { useState } from "react";
import './style.css'; //이번 과제는 컴포넌트 분리가 어려워서 css를 사용했습니다 ㅠㅠ
import './background.js';
import Clock from './clock.js';
import Todobox from "./toDo.js";
import Donebox from "./done.js"; 


function App() {
  const [toDo, inputToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [doneToDoList, setDoneToDoList] = useState([]);

  
  //inputToDo를 통해 입력받음
  const onChange = (event) => inputToDo(event.target.value);


  const submitInput = (event) => {
      event.preventDefault();
      if (toDo === "") {
        return;
      }
      setDoneToDoList((currentArray) => [toDo, ...currentArray]); //입력받은 걸 배열에 넣음
      inputToDo("");

    };

  

  return (
    <div className="center">
    <Clock></Clock>
    <div className="whiteBox">
     
     <h1>❗투두리스트❗</h1>
    
     <header className = "input-box">
      
     <form onSubmit={submitInput} >
      <input
        className = "toDo"
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <span className = "toDoButton" onClick={submitInput}> +</span>
    </form>
      
      </header>


      <hr/>
      
      <ul className ="todo-box">
      <span className="title">✍️To Do({toDos.length})</span>
    {toDos.map((item, index) => (
    <li key={index}>
    <span onClick={() => moveDoneButton(item,index)}>✔️ </span>
   {item}
   <span onClick={() => deleteToDoButton(index)}> ❌</span>
   </li>
))}
</ul>
     

<hr/>

<ul className = "done-box">
  <span className="title">👻Done({doneToDos.length})</span>
    {doneToDos.map((item, index) => (
    <li className ="done-list" key={index}>
   <span onClick={() => moveToDoButton(item,index)}>📂 </span>
   {item}
   <span onClick={() => deleteDoneButton(index)}> ❌</span>
   </li>
))}
</ul>

      </div>

</div>
  );
}

export default App;
