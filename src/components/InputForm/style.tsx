import styled from 'styled-components';

export const DivInputForm = styled.div`
  //border: 2px solid blue;
  margin-bottom: 10px;
  overflow: auto;
`;

export const InputStyle = styled.input`
  color: white;
  background: none;
  border: none;
  border-right: 0px;
  border-top: 0px;
  boder-left: 0px;
  boder-bottom: 0px;
  &:focus {
    outline: none;
  }
`;
export const Rec1 = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 0px;
  height: 0px;
  border-top: 10px solid aqua;
  border-left: 10px solid aqua;
  border-right: 10px solid aqua;
  border-bottom: 10px solid aqua;
`;
export const Rec = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background: aqua;
  box-sizing: border-box;
`;

export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 10px solid transparent;
  border-left: 10px solid aqua;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
`;

export const SpanStyle = styled.span`
  display: 'flex';
  background: 'black';
`;
