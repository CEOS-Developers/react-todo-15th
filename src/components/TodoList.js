import styled from 'styled-components';

const TodoList = () => {
  return (
    <Container>
      <h1>할 일</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </Container>
  );
};
const Container = styled.div``;
export default TodoList;
