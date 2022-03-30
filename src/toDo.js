import styled, { createGlobalStyle } from "styled-components";
import useToDo from "./hooks/useToDo";
import { ListTitle, Button, Ul, List} from "./Container";
import TodoItem from "./TodoItem";

/* type ToDoProps = {

  type : string;
  setDoneToDoList: ()=>void;
  toDoList : Array<string>;
  setToDoList: ()=>void;
}
*/

function ToDo({type,setDoneToDoList ,toDoList ,setToDoList}){
    
 const {deleteButton, moveButton} = useToDo(type,setDoneToDoList ,toDoList ,setToDoList);
    

return (
  <Ul>
  <ListTitle>✍️To Do({toDoList.length})</ListTitle>
 {toDoList.map((item, id) => (
<List key={id}>
<Button onClick={() => moveButton(item,id)}>✔️</Button>
{item}
<Button onClick={() => deleteButton(item,id)}>❌</Button>

</List>
))}
</Ul>
);



}

export default ToDo;