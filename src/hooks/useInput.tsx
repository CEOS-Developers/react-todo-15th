import { useState } from 'react';
import { HandleInputChangeInterface } from '../interface';

const useInputs = (initialForm: string) => {
  const [form, setForm] = useState(initialForm);

  const handleInputChange = (e: HandleInputChangeInterface) => {
    setForm(e.target.value);
  };

  const resetInput = (): void => {
    setForm('');
  };

  return { form, handleInputChange, resetInput };
};

export default useInputs;
