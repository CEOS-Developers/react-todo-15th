import React, { useContext } from "react";
import ListItem from "../components/ListItem";
import { GlobalContext } from "../context/GlobalState";

const ListItemContainer = ({ title, listType }) => {
  const { listItems } = useContext(GlobalContext);

  return (
    <section className="itemSection">
      <h4 className="sectionTitle">
        {title}(
        <p className="itemCount">
          {listItems.filter((item) => item.type === listType).length}
        </p>
        )
      </h4>
      <div className="itemList invisibleScrollbar">
        {listItems.map((item) => {
          if (item.type === listType) {
            return <ListItem key={item.id} item={item} />;
          }
          return;
        })}
      </div>
    </section>
  );
};

export default ListItemContainer;
