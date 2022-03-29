import styled, { createGlobalStyle } from "styled-components";
import useToDo from "./hooks/useToDo";
import { ListTitle, Button, Ul, List} from "./Container";

function ToDo({type,setDoneToDoList ,toDoList ,setToDoList}){
    
  const {deleteToDoButton, moveDoneButton} = useToDo(setDoneToDoList ,toDoList ,setToDoList);
    

return (
  <Ul>
  <ListTitle>✍️To Do({toDoList.length})</ListTitle>
 {toDoList.map((item, id) => (
<List key={id}>
<Button onClick={() => moveDoneButton(item,id)}>✔️</Button>
{item}
<Button onClick={() => deleteToDoButton(id)}>❌</Button>
</List>
))}
</Ul>
);



}

export default ToDo;