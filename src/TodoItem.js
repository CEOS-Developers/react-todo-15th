
import useToDo from "./hooks/useToDo";
import {Button} from "./Container"; 

function TodoItem({item,id, setDoneToDoList ,toDoList ,setToDoList}){

   const {moveButton, deleteButton} = useToDo(setDoneToDoList ,toDoList ,setToDoList);

    return
    (

        <div>
            <Button onClick={() => moveButton(item,id)}>✔️</Button>
            {item}
            <Button onClick={() => deleteButton(item,id)}>❌</Button>
        </div>
    );
   

}

export default TodoItem;