import { useState } from 'react';

// Hint: props로 id, text, onClick 등 (자유)
export default function Item({ task, todoList, setTodoList }) {
  const [isDone, setIsDone] = useState(false);
  const changeState = () => {
    setIsDone(!isDone);
  };

  const removeItem = (e) => {
    setTodoList(todoList.filter((item) => item !== task));
  };

  return (
    <section>
      <ul>
        <li
          style={{ textDecoration: isDone ? 'line-through' : 'none' }}
          onClick={changeState}
        >
          {task}
        </li>
        <button onClick={removeItem}>X</button>
      </ul>
    </section>
  );
}
