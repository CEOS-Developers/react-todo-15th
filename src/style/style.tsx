import styled from 'styled-components';
import '../style/GlobalStyle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  margin: auto;
  width: 300px;
  padding: 10px;
  background: black;
  border-radius: 10px;
  z-index: -1;
`;

export const SpanStyle = styled.span`
  color: white;
  marginbottom: 5px;
`;
