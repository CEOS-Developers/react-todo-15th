import { useState } from 'react';

const useInput = (initialText: string) => {
  const [inputText, setInputText] = useState(initialText);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const resetInputText = () => {
    setInputText('');
  };

  return { inputText, handleInputChange, resetInputText };
};

export default useInput;
