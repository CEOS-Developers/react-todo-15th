import styled, { createGlobalStyle } from "styled-components";
//import DoneList from "./donelist";

const StyledLi = styled.li
` color: gray;
  text-decoration:line-through;
`
;

const Styledemoji = styled.span

`
margin:4px;

`
;

function done({type,setDoneToDoList ,doneToDoList ,setToDoList}){
    const moveToDoButton = (item,id) =>{
   
        setToDoList((current) => [item, ...current]);
        setDoneToDoList(doneToDoList.filter((item, doneId) => id !== doneId));
      }
        
      const deleteDoneButton = id => {
        setDoneToDoList(doneToDoList.filter((item, doneId) => id !== doneId));
        };

        return (


            <ul className = "done-box">
            <div className="title">👻Done({doneToDoList.length})</div>
              {doneToDoList.map((item, id) => (
               <StyledLi key={id}>
               <Styledemoji onClick={() => moveToDoButton(item,id)}>📂</Styledemoji>
               {item}
               <Styledemoji onClick={() => deleteDoneButton(id)}>❌</Styledemoji>
               </StyledLi>
              
          ))}
          </ul>

        );
}

export default done;