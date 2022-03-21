const TodoList = ({
  type,
  currentList,
  toggleList,
  setCurrentList,
  setToggleList,
}) => {
  // todo <-> done
  const _toggleTodo = ({ target }) => {
    const parentNode = target.parentNode;
    const idx = parentNode.id;

    setToggleList([...toggleList, currentList[idx]]);
    setCurrentList(currentList.filter((_, todoId) => todoId !== Number(idx)));
  };

  // delete item
  const _deleteTodo = ({ target }) => {
    const parentNode = target.parentNode;
    const idx = parentNode.id;

    setCurrentList(currentList.filter((_, todoId) => todoId !== Number(idx)));
  };

  return (
    <section className="todo-contents">
      <h3>
        {type === "todo" ? "TO DO" : "DONE"} (<span>{currentList.length}</span>)
      </h3>
      <ul className="todo-list">
        {currentList.map((todo, idx) => (
          <li key={todo.id} id={idx} className="todo-list-item">
            <span className="todo-item-text" onDoubleClick={_toggleTodo}>
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
