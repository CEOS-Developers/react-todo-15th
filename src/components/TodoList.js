import styled from 'styled-components';
import { ListContainer, ScrollBox } from './Container';
import TodoItem from './TodoItem';

const TodoList = ({ todoList }) => {
  return (
    <ListContainer>
      <Title>할 일</Title>
      <ScrollBox>
        {todoList.map(({ data }, index) => (
          <TodoItem key={index} data={data} />
        ))}
      </ScrollBox>
    </ListContainer>
  );
};

const Title = styled.h2``;

export default TodoList;
