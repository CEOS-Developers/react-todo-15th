import { BsPlusCircle } from 'react-icons/bs';
import { useState } from 'react';
import styled from 'styled-components';
import {IHandleTodoInsert} from '../interface'

interface ITodoInsertProps {
  handleTodoInsert: IHandleTodoInsert;
}

const TodoInsert = ({ handleTodoInsert }: ITodoInsertProps) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleTodoInsert(inputValue);
    setInputValue('');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder=" Please type here..."
          autoFocus
          value={inputValue}
          onChange={handleChange}
        />
        <SubmitButton type="submit">
          <BsPlusCircle />
        </SubmitButton>
      </Form>
    </section>
  );
};

const Form = styled.form`
  height: 10%;
  margin-top: -1.8%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  margin: 4.5% 2% 9% 1.5%;

  border-radius: 10px;
  border: solid 2px #3f464d;
  opacity: 0.55;

  :focus {
    opacity: 1;
    border: solid 2.2px #3f464d;
  }

  :hover {
    opacity: 1;
    border: solid 2.2px #3f464d;
  }
`;

const SubmitButton = styled.button`
  width: 48px;
  height: 48px;
  margin: 0% -2% 4% 0%;

  border-radius: 20px;
  background: none;
  border: none;
  opacity: 0.6;

  font-size: 2.5rem;
  color: #3f464d;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export default TodoInsert;
