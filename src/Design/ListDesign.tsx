//list 디자인 관리
import styled from 'styled-components';

interface ILIst {

    color ?:string;
    decoration ?:string;
    
  }

export const ListTitle = styled.div
    `font-size: 20px;
    `
;

export const List = styled.li<ILIst>
`
    color: ${(props) => props.color || "black"};
    text-decoration: ${(props) => props.decoration || "none"};
`

export const Button = styled.span
`
margin:4px;
`

export const Ul = styled.ul

`

margin: 0;
padding: 0;
flex: 0.5;
border-bottom: 1px solid grey;
overflow: auto;
list-style:none;
cursor: pointer;

`
;



