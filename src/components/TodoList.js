import styled from 'styled-components';
import { ListContainer, ScrollBox } from './Container';

const TodoList = () => {
  return (
    <ListContainer>
      <h3>할 일</h3>
      <ScrollBox>
        <li>1</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>1</li>
        <li>2</li>
      </ScrollBox>
    </ListContainer>
  );
};
export default TodoList;
