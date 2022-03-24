import styled from 'styled-components';

export const DivTitle = styled.div`
  display: flex;

  //border: 2px solid lightskyblue;
  margin-bottom: 10px;
  color: white;
  display: flex;
  padding: 5px;
  background: #8e0e00; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #1f1c18,
    #8e0e00
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #1f1c18,
    #8e0e00
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Cir1 = styled.div`
  cursor: pointer;
  width: 10px;
  height: 10px;
  background: indianred;
  border: 1px solid indianred;
  border-radius: 50%;
  margin-right: 5px;
  color: black;
  font-size: 10px;
  text-align: center;
`;

export const Cir2 = styled.div`
  width: 10px;
  height: 10px;
  background: yellow;
  border: 1px solid yellow;
  border-radius: 50%;
  margin-right: 5px;
`;

export const Cir3 = styled.div`
  width: 10px;
  height: 10px;
  background: green;
  border: 1px solid green;
  border-radius: 50%;
  margin-right: 5px;
`;

export const Etc = styled.div`
  font-size: 5px;
  width: 5px;
  height: 5px;
  background: black;
  opacity: 0.5;
`;
