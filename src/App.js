import React from 'react';
import logo192 from './logo192.png';
import logo512 from './logo512.png';
import './App.css';

function App() {
  return (
    <div className = "App">
      <div className = "Title">
        <h1>투두</h1>
        <img src = {logo}/>
      </div>
      
    </div>
    /*
    const element = <form className = "input-box">;
    const element = <div><input
      type="text"
      id="todo-input"
      placeholder="오늘 할 일을 입력하세요."/>
    <input type="button" value="+" onclick="addNewTodo()" /div>
    </form>
    const element = <div>
    <section className="todo-list-box">
      <h3 id="todo-list-title">오늘 할 일은 다음과 같아요.</h3>
      <ul id="todo-list"></ul>
    </section>
    </div>;
    */
  )
};

export default App;
