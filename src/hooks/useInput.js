import { useState } from 'react';

const useInputs = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const handleInputChange = (e) => {
    setForm(e.target.value);
  };

  const resetInput = () => {
    setForm('');
  };

  return [form, handleInputChange, resetInput];
};

export default useInputs;
