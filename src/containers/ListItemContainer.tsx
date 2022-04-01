import React, { useContext } from "react";
import styled from "styled-components";

import ListItem from "../components/ListItem";
import { StateContext } from "../context/GlobalContext";
import { ItemType } from "../Objects";

const ItemSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 30rem;
  padding: 0 1rem 0 1rem;
  height: 16rem;
`;

const ItemList = styled.div`
  overflow-y: auto;
  padding: 0.1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SectionTitle = styled.h4`
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
`;

const ListItemContainer = ({ title, listType }:{title: String, listType: ItemType}) => {
  const listItems = useContext(StateContext);

  return (
    <ItemSection>
      <SectionTitle>
        {title}(
        <p className="itemCount">
          {listItems.filter((item) => item.type === listType).length}
        </p>
        )
      </SectionTitle>
      <ItemList>
        {listItems.map(
          (item) =>
            item.type === listType && <ListItem key={item.id} item={item} />
        )}
      </ItemList>
    </ItemSection>
  );
};

export default ListItemContainer;
