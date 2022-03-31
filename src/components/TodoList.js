import TodoItem from './TodoItem';
import styled from 'styled-components';
// import './TodoList.css';

const TodoList = ({ todos, doneCnt, todoCnt, onIsDoneToggle, onRemove }) => {
  const todoItems = todos.filter((todo) => todo.isDone === false);
  const doneItems = todos.filter((todo) => todo.isDone === true);
  return (
    <div>
      {/* <header className="TodoTitle">Todo ({todoCnt})</header> */}
      <TodoHeader>Todo ({todoCnt})</TodoHeader>
      {/* <section className="TodoList">
        {todoItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onIsDoneToggle={onIsDoneToggle}
            onRemove={onRemove}
          />
        ))}
      </section> */}
      <TodoSection>
        {todoItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onIsDoneToggle={onIsDoneToggle}
            onRemove={onRemove}
          />
        ))}
      </TodoSection>

      {/* <header className="DoneTitle">Done ({doneCnt})</header> */}
      <DoneHeader>Done ({doneCnt})</DoneHeader>
      {/* <section className="DoneList">
        {doneItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onIsDoneToggle={onIsDoneToggle}
            onRemove={onRemove}
          />
        ))}
      </section> */}
      <DoneSection>
        {doneItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onIsDoneToggle={onIsDoneToggle}
            onRemove={onRemove}
          />
        ))}
      </DoneSection>
    </div>
  );
};

const TodoHeader = styled.header`
  margin: 6% 0% 3% 3%;

  font-size: 1.4rem;
  font-weight: bold;
`;

const TodoSection = styled.section`
  height: 260px;
  overflow: auto;
`;

const DoneHeader = styled.header`
  margin: 4% 0% 3% 3%;

  font-size: 1.4rem;
  font-weight: bold;
`;

const DoneSection = styled.section`
  height: 170px;
  overflow: auto;
`;

export default TodoList;
