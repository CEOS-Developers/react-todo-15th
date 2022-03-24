import { useState, useRef } from 'react';

export default function Form({ savedList, setSavedList }) {
  const [input, setInput] = useState([]);
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const nextId = useRef(1);

  const onCreate = (e) => {
    e.preventDefault();
    const updatedList = [...savedList, input];
    setSavedList(updatedList);
    setInput('');
    nextId.current += 1;
  };

  return (
    <form>
      <input
        type={'text'}
        placeholder={'type here'}
        value={input}
        onChange={onChange}
      />
      <button type="submit" onClick={onCreate}>
        +
      </button>
    </form>
  );
}
