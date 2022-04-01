import TodoItem from './TodoItem';
import styled from 'styled-components';
import {ITodoListProps} from '../interface'

const TodoList = ({ todos, doneCnt, todoCnt, handleIsDoneToggle, handleRemoveTodo }: ITodoListProps) => {
  const todoItems = todos.filter((todo) => todo.isDone === false);
  const doneItems = todos.filter((todo) => todo.isDone === true);
  return (
    <>
      <TodoHeader>Todo ({todoCnt})</TodoHeader>
      <TodoSection>
        {todoItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleIsDoneToggle={handleIsDoneToggle}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </TodoSection>
      <DoneHeader>Done ({doneCnt})</DoneHeader>
      <DoneSection>
        {doneItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleIsDoneToggle={handleIsDoneToggle}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </DoneSection>
    </>
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
