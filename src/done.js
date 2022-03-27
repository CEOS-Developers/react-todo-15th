import styled, { createGlobalStyle } from "styled-components";

const Styledul = styled.ul
`margin: 0;
padding: 0;
flex: 0.5;
border-bottom: 1px solid grey;
overflow: auto;
list-style:none;
cursor: pointer;
`
   ;

const Styledtitle = styled.span
`font-size: 20px;`
;

const Styledlist = styled.li
` color: gray;
text-decoration:line-through;
`
;

const Styledemoji = styled.span

`
margin:4px;

`
;

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