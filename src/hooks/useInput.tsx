import {useState } from "react";



const useInput = () => {
    const [toDo, inputToDo] = useState<string>("");
  
    const onChange = (event : React.ChangeEvent<HTMLInputElement>) => inputToDo(event.target.value);
  
    return { toDo, onChange, inputToDo };
  };
  
  export default useInput;