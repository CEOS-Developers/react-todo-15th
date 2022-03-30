import { useState } from "react";


const useToDo=(type,setDoneToDoList, List ,setToDoList) => {
  
  
  const setToDo = (item,id) => {
                           if(type === "Todo") 
                           setToDoList(List.filter((item, index) => id !== index));
                          else
                           setDoneToDoList(List.filter((item, index) => id !== index));
                          
                          }

  const setDoneToDo = (item,id) => {
                             if(type === "Todo") 
                               setDoneToDoList((current) => [item, ...current]);
                             else
                                setToDoList((current) => [item, ...current]);
  }
  const deleteButton = (item,id) => {
     
      setToDo(item,id);
        
      };
        
      const moveButton = (item,id) =>{
        
       setDoneToDo(item,id);
       setToDo(item,id);
      
      };


  return {deleteButton, moveButton};
};


export default useToDo;