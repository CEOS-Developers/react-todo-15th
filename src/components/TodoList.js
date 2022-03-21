import styled from 'styled-components';
import { ListContainer, ScrollBox } from './Container';

const TodoList = () => {
  return (
    <ListContainer>
      <h1>할 일</h1>
      <ScrollBox>
        <ul>
          <li>1</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </ScrollBox>
    </ListContainer>
  );
};
export default TodoList;
