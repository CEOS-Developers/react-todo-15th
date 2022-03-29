import { useState} from "react";

const useInputForm=() => {

const [toDo, inputToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onChange = (event) => inputToDo(event.target.value);

  
  const submitInput = (event) => {
      event.preventDefault();
      if (toDo) {
        setToDoList((currentArray) => [toDo, ...currentArray]); //입력받은 걸 배열에 넣음
      }
      inputToDo("");

    };
}
    export default useInputForm;