import TodoItem from './TodoItem';
import styled from 'styled-components';
import { ITodoListProps, IType } from '../interface';

const TodoList = ({
  todos,
  doneCnt,
  todoCnt,
  handleIsDoneToggle,
  handleRemoveTodo,
}: ITodoListProps) => {
  const todoItems = todos.filter((todo) => todo.isDone === false);
  const doneItems = todos.filter((todo) => todo.isDone === true);
  return (
    <>
      <StyledHeader type="todo">Todo ({todoCnt})</StyledHeader>
      <StyledSection type="todo">
        {todoItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleIsDoneToggle={handleIsDoneToggle}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </StyledSection>
      <StyledHeader type="done">Done ({doneCnt})</StyledHeader>
      <StyledSection type="done">
        {doneItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleIsDoneToggle={handleIsDoneToggle}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </StyledSection>
    </>
  );
};

const StyledHeader = styled.header<IType>`
  margin: ${({ type }) => (type === 'todo' ? '6% 0% 3% 3%' : '4% 0% 3% 3%')};
  font-size: 1.4rem;
  font-weight: bold;
`;

const StyledSection = styled.section<IType>`
  height: ${({ type }) => (type === 'todo' ? '260px' : '170px')};
  overflow: auto;
`;

export default TodoList;
