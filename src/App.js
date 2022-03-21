import "./style.css";
import { useState } from "react";

function App() {
  const [newTodoText, setNewTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const _changeText = (event) => {
    setNewTodoText(event.target.value);
  };

  const _addTodoItem = (e) => {
    e.preventDefault();

    // todo item 생성
    let todoId = new Date().getTime();
    let todoObj = {
      id: todoId,
      text: newTodoText,
    };

    // list에 todo item 추가
    setTodoList([...todoList, todoObj]);
    setNewTodoText("");
  };

  return (
    <div>
      <main className="container">
        <section className="title-contents">
          <h2 className="todo-title">투두리스트</h2>
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
        <section className="todo-contents">
          <h3>
            TO DO (<span>{todoList.length}</span>)
          </h3>
          <ul className="todo-list">
            {todoList.map((todo) => (
              <li id={todo.id} className="todo-list-item">
                <span className="todo-item-text">{todo.text}</span>
                <img
                  className="todo-delete-btn"
                  src="bin.png"
                  alt="delete-btn"
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
