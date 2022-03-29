import styled, { createGlobalStyle } from "styled-components";
import { ListTitle, Button, Ul,List} from "./Container";

const StyledLi = styled.li
` color: gray;
  text-decoration:line-through;
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


            <Ul className = "done-box">
            <ListTitle>👻Done({doneToDoList.length})</ListTitle>
              {doneToDoList.map((item, id) => (
               <List color="gray" decoration ="line-through" key={id}>
               <Button onClick={() => moveToDoButton(item,id)}>📂</Button>
               {item}
               <Button onClick={() => deleteDoneButton(id)}>❌</Button>
               </List>
              
          ))}
          </Ul>

        );
}

export default done;