import { useState, useRef } from 'react';

export default function Form({ todoList, setTodoList }) {
  const [input, setInput] = useState([]);
  const onChange = (e) => {
    setInput(e.target.value);
  };

  const nextId = useRef(1);

  const onCreate = (e) => {
    const updatedList = [...todoList, input];
    setTodoList(updatedList);
    setInput('');
    nextId.current += 1;
  };

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onCreate();
    }
  };

  return (
    <form>
      <input
        type={'text'}
        placeholder={'type here'}
        onChange={onChange}
        onKeyDown={onEnter}
        value={input}
      />
      <button onClick={onCreate}>+</button>
    </form>
  );
}
