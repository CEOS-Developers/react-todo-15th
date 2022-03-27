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