import "./style.css";
import { useState } from "react";

function App() {
  const [newTodoText, setNewTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const _changeText = (event) => {
    setNewTodoText(event.target.value);
  };

  // todo item 추가
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

  // todo -> done
  const _toggleToDone = (e) => {
    const parentNode = e.target.parentNode;
    const idx = parentNode.id;

    setDoneList([...doneList, todoList[idx]]);
    setTodoList(todoList.filter((_, todoId) => todoId !== Number(idx)));
  };

  // done -> todo
  const _toggleToTodo = (e) => {
    const parentNode = e.target.parentNode;
    const idx = parentNode.id;

    setTodoList([...todoList, doneList[idx]]);
    setDoneList(doneList.filter((_, doneId) => doneId !== Number(idx)));
  };

  // delete todo item
  const _deleteTodo = (e) => {
    const parentNode = e.target.parentNode;
    const idx = parentNode.id;

    setTodoList(todoList.filter((_, todoId) => todoId !== Number(idx)));
  };

  // delete done item
  const _deleteDone = (e) => {
    const parentNode = e.target.parentNode;
    const idx = parentNode.id;

    setDoneList(doneList.filter((_, doneId) => doneId !== Number(idx)));
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
            {todoList.map((todo, idx) => (
              <li key={todo.id} id={idx} className="todo-list-item">
                <span className="todo-item-text" onDoubleClick={_toggleToDone}>
                  {todo.text}
                </span>
                <img
                  className="todo-delete-btn"
                  src="bin.png"
                  alt="delete-btn"
                  onClick={_deleteTodo}
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="todo-contents">
          <h3>
            DONE (<span>{doneList.length}</span>)
          </h3>
          <ul className="todo-list">
            {doneList.map((done, idx) => (
              <li key={done.id} id={idx} className="todo-list-item">
                <span className="done-item-text" onDoubleClick={_toggleToTodo}>
                  {done.text}
                </span>
                <img
                  className="todo-delete-btn"
                  src="bin.png"
                  alt="delete-btn"
                  onClick={_deleteDone}
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
