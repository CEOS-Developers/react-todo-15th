import React from 'react';
import './TodoInsert.css';
import { BsPlusCircle } from 'react-icons/bs';
import { useState } from 'react';

const TodoInsert = ({ onInsertTodo}) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue('');
  };

  return (
    <form className="Form" onSubmit={onSubmit}>
      <input
        className="Input"
        placeholder=" Please type here..."
        autoFocus
        value={value}
        onChange={onChange}
      />
      <button className="Button" type="submit">
        <BsPlusCircle />
      </button>
    </form>
  );
};

export default TodoInsert;
