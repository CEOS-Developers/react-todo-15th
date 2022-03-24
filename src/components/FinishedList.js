import styled from 'styled-components';
import { ListContainer, ScrollBox } from './Container';
import TodoItem from './TodoItem';

const FinishedList = ({ finishedList }) => {
  return (
    <ListContainer>
      <Title>완료된 일</Title>
      <ScrollBox>
        {finishedList.map((element, index) => (
          <TodoItem key={index} data={element} />
        ))}
      </ScrollBox>
    </ListContainer>
  );
};

const Title = styled.h2``;
export default FinishedList;
