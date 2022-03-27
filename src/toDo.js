import styled, { createGlobalStyle } from "styled-components";


const Styledul = styled.ul
`margin: 0;
padding: 0;
flex: 0.5;
border-bottom: 1px solid grey;
overflow: auto;
list-style:none;
cursor: pointer;
`
   ;

const Styledtitle = styled.span
`font-size: 20px;`
;


const Styledemoji = styled.span

`
margin:4px;

`
;

function toDo({setDoneToDoList ,toDoList ,setToDoList}){
    const deleteToDoButton = index => {
        setToDoList(toDoList.filter((item, todoIndex) => index !== todoIndex));
        
      };
        
      const moveDoneButton = (item,index) =>{
        
        setDoneToDoList((current) => [item, ...current]);
        setToDoList(toDoList.filter((item, todoIndex) => index !== todoIndex));
        
    
      }

return (
  <Styledul className ="todo-box">
  <Styledtitle className="title">✍️To Do({toDoList.length})</Styledtitle>
 {toDoList.map((item, index) => (
<li key={index}>
<Styledemoji onClick={() => moveDoneButton(item,index)}>✔️</Styledemoji>
{item}
<Styledemoji onClick={() => deleteToDoButton(index)}>❌</Styledemoji>
</li>
))}



</Styledul>
);



}

export default toDo;