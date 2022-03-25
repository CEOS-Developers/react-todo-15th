import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onIsDoneToggle, onChangeTargetTodo, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onIsDoneToggle={onIsDoneToggle}
          onChangeTargetTodo={onChangeTargetTodo}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;
