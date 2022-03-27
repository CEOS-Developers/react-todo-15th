function done({setDoneToDoList ,doneToDoList ,setToDoList}){
    const moveToDoButton = (item,index) =>{
   
        setToDoList((current) => [item, ...current]);
        setDoneToDoList(doneToDoList.filter((item, todoIndex) => index !== todoIndex));
        
    
      }
        
      const deleteDoneButton = index => {
        setDoneToDoList(doneToDoList.filter((item, todoIndex) => index !== todoIndex));
        };

        return (


            <Styledul className = "done-box">
            <Styledtitle className="title">👻Done({doneToDoList.length})</Styledtitle>
              {doneToDoList.map((item, index) => (
              <Styledlist className ="done-list" key={index}>
             <Styledemoji onClick={() => moveToDoButton(item,index)}>📂</Styledemoji>
             {item}
             <Styledemoji onClick={() => deleteDoneButton(index)}>❌</Styledemoji>
             </Styledlist>
          ))}
          </Styledul>

        );
}

export default done;