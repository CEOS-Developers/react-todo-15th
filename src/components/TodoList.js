import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, doneCnt, todoCnt, onIsDoneToggle, onRemove }) => {
  const todoItems = todos.filter((todo) => todo.isDone === false);
  const doneItems = todos.filter((todo) => todo.isDone === true);
  return (
    <div>
      <header className="TodoTitle">Todo ({todoCnt})</header>
      <section className="TodoList">
        {todoItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onIsDoneToggle={onIsDoneToggle}
            onRemove={onRemove}
          />
        ))}
      </section>
      <header className="DoneTitle">Done ({doneCnt})</header>
      <section className="DoneList">
        {doneItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onIsDoneToggle={onIsDoneToggle}
            onRemove={onRemove}
          />
        ))}
      </section>
    </div>
  );
};

export default TodoList;
