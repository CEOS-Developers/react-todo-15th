import styled from 'styled-components';
import { ListContainer, ScrollBox } from './Container';
import TodoItem from './TodoItem';

const FinishedList = ({ finishedList, deleteFinishedList, addTodoList }) => {
  return (
    <ListContainer>
      <Title>완료된 일</Title>
      <ScrollBox>
        {finishedList.map(({ data }, index) => (
          <TodoItem
            key={index}
            data={data}
            index={index}
            deleteFromList={deleteFinishedList}
            toggleToAnother={addTodoList}
          />
        ))}
      </ScrollBox>
    </ListContainer>
  );
};

const Title = styled.h2``;
export default FinishedList;
