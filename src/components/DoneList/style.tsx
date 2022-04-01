import styled from 'styled-components';
import { IListBtn } from 'interface';
export const DivDoneList = styled.div`
  //border: 2px solid indianred;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  color: white;
  height: 200px;
  overflow: auto;
`;

export const Unordered = styled.ul`
  margin: 0px;
  padding: 0px;
`;

export const DoneNumStyle = styled.div`
  font-size: 14px;
`;

export const ListBtn = styled.button<IListBtn>`
  cursor: grab;
  color: white;
  background: blue;
  border: 1px dotted blue;
  opacity: 0.5;
  text-decoration: line-through;
`;

export const SpanStyle = styled.span`
  color: #bf9053;
  fontweight: bold;
`;
