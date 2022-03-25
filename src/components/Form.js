import { useState, useRef } from 'react';
import styled from 'styled-components';

export default function Form({ savedList, setSavedList }) {
  const [input, setInput] = useState([]);
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const nextId = useRef(1);

  const onCreate = (e) => {
    e.preventDefault();
    const toDo = { key: nextId.current, value: input, isDone: false };
    const updatedList = [...savedList, toDo];
    setSavedList(updatedList);
    setInput('');
    nextId.current += 1;
  };

  return (
    <form>
      <InputContainer
        type={'text'}
        placeholder={'type here'}
        value={input}
        onChange={onChange}
      />
      <SubmitButton type="submit" onClick={onCreate}>
        +
      </SubmitButton>
    </form>
  );
}
const InputContainer = styled.input`
  width: 75%;
  height: 60%;
  margin: 1%;
  padding: 5%;
  border-radius: 2rem;
  border: solid 0.1rem lightgrey;
`;

const SubmitButton = styled.button`
  height: 60%;
  margin: 1%;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;
