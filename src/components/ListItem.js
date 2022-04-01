import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

import { GlobalContext } from "../context/GlobalState";

const Item = styled.div`
  display: flex;
  width: "100%";
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  padding: 0.75rem;
  &:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  }
`;

const ItemScrollDiv = styled.div`
  width: 23rem;
  display: flex;
  align-items: center;
`;

const ItemTitle = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-family: var(--ff-main);
  line-height: 1.5;
  text-align: left;
  word-wrap: break-word;
  word-break: break-all;
  text-align-last: left;
  font-size: 1rem;
  display: inline;
  line-height: 1.5;
`;

const ItemFinishButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  border-radius: 1.3rem;
  &:hover {
    background-color: lightgray;
  }
`;

const ItemDeleteButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-color: transparent;
  background-color: transparent;
  border-radius: 10rem;
  margin-right: 0.2rem;
  padding: 0 0.2rem 0 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
const DeleteIcon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  size: 1.5rem;
  color: gray;
`;

const ListItem = ({ item }) => {
  const { deleteItem, moveItem } = useContext(GlobalContext);

  return (
    <Item>
      <ItemScrollDiv>
        <ItemFinishButton
          type="button"
          onClick={() => {
            moveItem(item.id);
          }}
        >
          <ItemTitle>
            {/* listType의 done/todo에 따라 del 태그 삽입 */}
            {item.type === "done" ? <del>{item.content}</del> : item.content}
          </ItemTitle>
        </ItemFinishButton>
      </ItemScrollDiv>
      <ItemDeleteButton
        type="button"
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        <DeleteIcon>
          <FaTrash />
        </DeleteIcon>
      </ItemDeleteButton>
    </Item>
  );
};

export default ListItem;
