import styled from 'styled-components';
import { ListContainer, ScrollBox } from './Container';
import TodoItem from './TodoItem';
import { useState } from 'react';
import todoData from '../data.json';

const TodoList = () => {
  const [data, setData] = useState(todoData);

  return (
    <ListContainer>
      <Title>할 일</Title>
      <ScrollBox>
        {data.map((element, index) => (
          <TodoItem key={index} data={element.data} />
        ))}
      </ScrollBox>
    </ListContainer>
  );
};

const Title = styled.h2``;

export default TodoList;
