import React from 'react';
import styled from 'styled-components';

const Item = ({
  id,
  text,
  isDoneList,
  handleTextClick,
  handleDeleteBtnClick,
}) => {
  return (
    <span>
      <li id={id} isDoneList={isDoneList} onClick={handleTextClick}>
        {text}
      </li>
      <button onClick={handleDeleteBtnClick}>X</button>
    </span>
  );
};

export default Item;
