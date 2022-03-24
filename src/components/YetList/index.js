import { Fragment } from 'react';
import styled from 'styled-components';

const Index = (props) => {
  console.log(props.todoList[0]);
  return (
    <YetContainer>
      <h3>Yet</h3>
      <ul></ul>
      <h4>{props.todoList[0]}</h4>
    </YetContainer>
  );
};

const YetContainer = styled.div`
  border: 1px solid darkblue;
`;

export default Index;
