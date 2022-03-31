
import useToDo from "./hooks/useToDo";
import { ListTitle, Button, Ul, List} from "./ListDesign";
import { Dispatch, SetStateAction} from "react";
import {ItemList} from "./type";


/* type ToDoProps = {

  type : string;
  setDoneToDoList: ()=>void;
  toDoList : Array<string>;
  setToDoList: ()=>void;
}
*/

function ToDo({type,setDoneToDoList ,ItemList ,setToDoList}: ItemList){
    
  let list : string[] = ItemList;
 const {deleteButton, moveButton} = useToDo({type,setDoneToDoList ,list ,setToDoList});
    
return (
  <Ul>
  <ListTitle>✍️To Do({list.length})</ListTitle>
 {
 list.map((item, id) => (
<List key={id}>
<div>
<Button onClick={() => moveButton(item,id)}>✔️</Button>
{item}
<Button onClick={() => deleteButton(item,id)}>❌</Button>
</div>
</List>
))}
</Ul>
);



}

export default ToDo;