import styled from 'styled-components';
import { ListContainer, ScrollBox } from './Container';
import TodoItem from './TodoItem';
import { useState } from 'react';

const TodoList = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <ListContainer>
      <Title>할 일</Title>
      <ScrollBox>
        {data.map((element, index) => (
          <TodoItem key={index} data={element} />
        ))}
      </ScrollBox>
    </ListContainer>
  );
};

const Title = styled.h2``;

export default TodoList;
