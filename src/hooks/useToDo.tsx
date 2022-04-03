import {IProps} from "../type/type";


const useToDo=({type, setDoneToDoList, list , setToDoList} : IProps) => {
  
  
  const setToDo = (item : string, id :number) => {
                           if(type === "Todo") 
                           setToDoList(list.filter((item, index) => id !== index)); //todolist remove
                          else
                           setDoneToDoList(list.filter((item, index) => id !== index)); //donelist remove
                          
                          }

  const setDoneToDo = (item : string, id :number) => {
                             if(type === "Todo") 
                               setDoneToDoList((ItemList: Array<string>) => [item, ...ItemList]); //todolist 추가
                             else
                                setToDoList((ItemList: Array<string>) => [item, ...ItemList]); //donelist 추가
  }
  const deleteButton = (item : string, id :number) => {
     
      setToDo(item,id);
        
      };
        
      const moveButton = (item : string, id :number) =>{
        
       setDoneToDo(item,id); //토글이 일어나면 삭제하고 다른 리스트에 추가하기
       setToDo(item,id);
      
      };


  return {deleteButton, moveButton};
};


export default useToDo;