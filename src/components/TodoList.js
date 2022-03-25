import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({
  todos,
  onIsDoneToggle,
  onChangeTargetTodo,
  onRemove,
  doneCnt,
  todoCnt,
}) => {
  const todoItems = todos.filter((todo) => todo.isDone === false);
  const doneItems = todos.filter((todo) => todo.isDone === true);
  return (
    <div>
      <h1 className="TodoTitle">Todo ({todoCnt})</h1>
      <div className="TodoList">
        {todoItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onIsDoneToggle={onIsDoneToggle}
            onChangeTargetTodo={onChangeTargetTodo}
            onRemove={onRemove}
          />
        ))}
      </div>
      <h1 className="DoneTitle">Done ({doneCnt})</h1>
      <div className="DoneList">
        {doneItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onIsDoneToggle={onIsDoneToggle}
            onChangeTargetTodo={onChangeTargetTodo}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
