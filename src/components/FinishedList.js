import styled from 'styled-components';
import { ListContainer, ScrollBox } from './Container';
import TodoItem from './TodoItem';
import { useState } from 'react';

const FinishedList = () => {
  const [data, setData] = useState([1, 2, 3]);

  return (
    <ListContainer>
      <Title>완료된 일</Title>
      <ScrollBox>
        {data.map((element, index) => (
          <TodoItem key={index} data={element} />
        ))}
      </ScrollBox>
    </ListContainer>
  );
};

const Title = styled.h2``;
export default FinishedList;
