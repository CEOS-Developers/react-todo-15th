import "./style.css";
import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";

const App = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const _changeText = ({ target }) => {
    setNewTodoText(target.value);
  };

  // todo item 추가
  const _addTodoItem = (e) => {
    e.preventDefault();

    if (newTodoText !== "") {
      // todo item 생성
      let todoId = new Date().getTime();
      let todoObj = {
        id: todoId,
        text: newTodoText,
      };

      // list에 todo item 추가
      setTodoList([...todoList, todoObj]);
      setNewTodoText("");
    }
  };

  // save to localStorage
  const _saveLocalStorage = (type, list) => {
    localStorage.setItem(type, JSON.stringify(list));
  };

  useEffect(() => {
    const todoStorage = localStorage.getItem("todoList");
    const doneStorage = localStorage.getItem("doneList");

    // localStorage에 저장된 list가 있는지 확인
    if (todoStorage) {
      const loadTodo = JSON.parse(todoStorage);
      setTodoList(loadTodo);
    }
    if (doneStorage) {
      const loadDone = JSON.parse(doneStorage);
      setDoneList(loadDone);
    }
  }, []);
  useEffect(() => {
    _saveLocalStorage("todoList", todoList);
  }, [todoList]);
  useEffect(() => {
    _saveLocalStorage("doneList", doneList);
  }, [doneList]);

  return (
    <div>
      <main className="container">
        <section className="title-contents">
          <h2 className="todo-title">📝 투두리스트</h2>
          <form className="todo-input-items">
            <input
              className="todo-input"
              placeholder="할 일을 입력하세요"
              value={newTodoText}
              onChange={_changeText}
            />
            <button
              className="todo-input-btn"
              type="submit"
              onClick={_addTodoItem}
            >
              +
            </button>
          </form>
        </section>
        <TodoList
          todoList={todoList}
          doneList={doneList}
          setTodoList={setTodoList}
          setDoneList={setDoneList}
        />
        <DoneList
          todoList={todoList}
          doneList={doneList}
          setTodoList={setTodoList}
          setDoneList={setDoneList}
        />
      </main>
    </div>
  );
};

export default App;
