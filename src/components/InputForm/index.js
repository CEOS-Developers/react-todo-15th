import { useState } from 'react';

const Index = (props) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      contents: text,
      isDone: false,
      id: Date.now(),
    };
    setText('');
    props.todoList.push(obj);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="새로운 할 일 추가"
          value={text}
          onChange={onChange}
          required
        />
        <button>+</button>
      </form>
    </>
  );
};

export default Index;
