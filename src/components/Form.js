import { useState } from 'react';
import styled from 'styled-components';

const Form = ({ savedList, setSavedList }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (input) {
      const todo = { id: Date.now(), text: input, isDone: false };
      setSavedList((savedList) => [todo, ...savedList]);
    } else {
      alert('할일을 입력해 주세요');
    }

    setInput('');
  };

  return (
    <form>
      <InputContainer
        value={input}
        onChange={handleInputChange}
        placeholder="할일을 입력하세요"
      />
      <SubmitButton type="submit" onClick={handleFormSubmit}>
        +
      </SubmitButton>
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
