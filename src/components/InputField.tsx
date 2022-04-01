import { useContext } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { COLORS } from '../constants/COLORS';
import { ItemListContext } from '../contexts/ItemListContext';
import { IItem } from '../types/types';

const InputField = () => {
  const { inputText, handleInputChange, resetInputText } = useInput('');
  const { setItemListHandler } = useContext(ItemListContext);

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (inputText.replace(/\s+/g, '')) {
      const todo = { id: Date.now(), text: inputText, isDone: false };
      setItemListHandler((itemList: IItem[]) => [todo, ...itemList]);
    } else {
      alert('할일을 입력해 주세요');
    }

    resetInputText();
  };

  return (
    <InputForm onSubmit={handleFormSubmit}>
      <Input
        value={inputText}
        onChange={handleInputChange}
        spellCheck="false"
        autoFocus
        placeholder="할일을 입력하세요"
      />
      <SubmitBtn onClick={handleFormSubmit}>➕</SubmitBtn>
    </InputForm>
  );
};

const InputForm = styled.form`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 77.5%;
  height: 50%;
  padding-left: 2.5%;

  border-radius: 8px;
  border: 1px solid ${COLORS.border};
  background: ${COLORS.background};

  ::placeholder {
    color: ${COLORS.placeholder};
  }
`;

const SubmitBtn = styled.button`
  width: 10%;
  height: 50%;

  background: none;
  border-radius: 8px;
  border: 1px solid ${COLORS.border};

  cursor: pointer;
`;

export default InputField;
