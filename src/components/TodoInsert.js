import React from 'react';

const TodoInsert = () => {
  return (
    <form className="Form">
      <input autoFocus className="Input" placeholder=" Please enter here..." />
      <button className="Button" type="submit">
        <BsPlusCircle />
      </button>
    </form>
  );
};

export default TodoInsert;
