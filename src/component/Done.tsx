import styled, { createGlobalStyle } from "styled-components";
import { ListTitle, Button, Ul,List} from "../Design/ListDesign";
import useToDo from "../hooks/useToDo";
import {ItemList} from "../type/type";

/*type DoneProps = {

  type : string;
  setDoneToDoList: ()=>void;
  doneToDoList : Array<string>;
  setToDoList: ()=>void;
}
*/

function Done({type,setDoneToDoList ,ItemList ,setToDoList} : ItemList){
  
  let list : string[] = ItemList;

  const {deleteButton, moveButton} = useToDo({type,setDoneToDoList ,list ,setToDoList});
        return (
            <Ul className = "done-box">
            <ListTitle>👻Done({ItemList.length})</ListTitle>
              {ItemList.map((item, id) => (
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