import {IProps} from "../type";



const useToDo=({type, setDoneToDoList, list , setToDoList} : IProps) => {
  
  
  const setToDo = (item : string, id :number) => {
                           if(type === "Todo") 
                           setToDoList(list.filter((item, index) => id !== index));
                          else
                           setDoneToDoList(list.filter((item, index) => id !== index));
                          
                          }

  const setDoneToDo = (item : string, id :number) => {
                             if(type === "Todo") 
                               setDoneToDoList((ItemList: Array<string>) => [item, ...ItemList]);
                             else
                                setToDoList((ItemList: Array<string>) => [item, ...ItemList]);
  }
  const deleteButton = (item : string, id :number) => {
     
      setToDo(item,id);
        
      };
        
      const moveButton = (item : string, id :number) =>{
        
       setDoneToDo(item,id);
       setToDo(item,id);
      
      };


  return {deleteButton, moveButton};
};


export default useToDo;