const DoneList = ({ todoList, doneList, setTodoList, setDoneList }) => {
  // done -> todo
  const _toggleToTodo = ({ target }) => {
    const parentNode = target.parentNode;
    const idx = parentNode.id;

    setTodoList([...todoList, doneList[idx]]);
    setDoneList(doneList.filter((_, doneId) => doneId !== Number(idx)));
  };

  // delete done item
  const _deleteDone = ({ target }) => {
    const parentNode = target.parentNode;
    const idx = parentNode.id;

    setDoneList(doneList.filter((_, doneId) => doneId !== Number(idx)));
  };

  return (
    <section className="done-contents">
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
  );
};

export default DoneList;
