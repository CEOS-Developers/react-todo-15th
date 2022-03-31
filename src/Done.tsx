import styled, { createGlobalStyle } from "styled-components";
import { ListTitle, Button, Ul,List} from "./ListDesign";
import useToDo from "./hooks/useToDo";

/*type DoneProps = {

  type : string;
  setDoneToDoList: ()=>void;
  doneToDoList : Array<string>;
  setToDoList: ()=>void;
}
*/

function Done({type,setDoneToDoList ,doneToDoList ,setToDoList}){
  
  const {deleteButton, moveButton} = useToDo(type,setDoneToDoList ,doneToDoList ,setToDoList);
        return (
            <Ul className = "done-box">
            <ListTitle>👻Done({doneToDoList.length})</ListTitle>
              {doneToDoList.map((item, id) => (
               <List color="gray" decoration ="line-through" key={id}>
               <Button onClick={() => moveButton(item,id)}>📂</Button>
               {item}
               <Button onClick={() => deleteButton(item,id)}>❌</Button>
               </List>
              
          ))}
          </Ul>

        );
}

export default Done;