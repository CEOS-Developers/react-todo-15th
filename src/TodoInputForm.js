const TodoInputForm = ({ text, setText, todoList, setTodoList }) => {
  const _changeText = ({ target }) => {
    setText(target.value);
  };

  // todo item 추가
  const _addTodoItem = (e) => {
    e.preventDefault();

    if (text !== "") {
      // todo item 생성
      let todoId = new Date().getTime();
      let todoObj = {
        id: todoId,
        text,
      };

      // list에 todo item 추가
      setTodoList([...todoList, todoObj]);
      setText("");
    }
  };

  return (
    <section className="title-contents">
      <h2 className="todo-title">📝 투두리스트</h2>
      <form className="todo-input-items">
        <input
          className="todo-input"
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={_changeText}
        />
        <button className="todo-input-btn" type="submit" onClick={_addTodoItem}>
          +
        </button>
      </form>
    </section>
  );
};

export default TodoInputForm;
