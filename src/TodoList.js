const TodoList = ({ todoList, doneList, setTodoList, setDoneList }) => {
  // todo -> done
  const _toggleToDone = ({ target }) => {
    const parentNode = target.parentNode;
    const idx = parentNode.id;

    setDoneList([...doneList, todoList[idx]]);
    setTodoList(todoList.filter((_, todoId) => todoId !== Number(idx)));
  };

  // delete todo item
  const _deleteTodo = ({ target }) => {
    const parentNode = target.parentNode;
    const idx = parentNode.id;

    setTodoList(todoList.filter((_, todoId) => todoId !== Number(idx)));
  };

  return (
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
  );
};

export default TodoList;
