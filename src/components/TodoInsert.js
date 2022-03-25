import './TodoInsert.css';
import { BsPlusCircle } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const TodoInsert = ({ onInsertTodo, targetTodo }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue('');
  };

  // 컴포넌트가 처음 렌더링 되면 어떤 것을 실행하느냐를 여기서 처리
  // useEffect(() => {
  //   if (targetTodo) {
  //     setValue(targetTodo.text);
  //   }
  // }, [targetTodo]);

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
