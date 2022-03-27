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
        {text} &nbsp;
        <button onClick={handleDeleteBtnClick}>X</button>
      </li>
    </span>
  );
};

export default Item;
