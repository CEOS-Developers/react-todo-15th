import { useState } from 'react';
import styled from 'styled-components';
import { IHandleTodoInsert } from './Interface';

interface ITodoInsertProps {
  handleTodoInsert: IHandleTodoInsert;
}

const Form = ({ handleTodoInsert }: ITodoInsertProps) => {
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input) {
      handleTodoInsert(input);
    } else {
      alert('할일을 입력해 주세요');
    }

    setInput('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <InputContainer
        id={Date.now().toString()}
        value={input}
        onChange={handleInputChange}
        placeholder="할일을 입력하세요"
      />
      <SubmitButton type="submit">+</SubmitButton>
    </form>
  );
};

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

export default Form;
