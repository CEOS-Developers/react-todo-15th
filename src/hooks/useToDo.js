import { useState } from "react";


const useToDo=(setDoneToDoList ,toDoList ,setToDoList) => {
  
    const deleteToDoButton = id => {
        setToDoList(toDoList.filter((item, todoId) => id !== todoId));
        
      };
        
      const moveDoneButton = (item,id) =>{
        
        setDoneToDoList((current) => [item, ...current]);
        setToDoList(toDoList.filter((item,  todoId) => id !== todoId));
        
    
      };


  return {deleteToDoButton, moveDoneButton};
};


export default useToDo;