import React, { useCallback, useMemo } from "react";
import ListItem from "../components/ListItem";

const ListItemContainer = (props) => {
  return (
    <section className="itemSection">
      <h4 className="sectionTitle">
        {props.title}(<p className="itemCount">{props.listCnt}</p>)
      </h4>
      <div className="itemList invisibleScrollbar">
        {props.listState.map((item) => {
          if (item.type === props.listType) {
            return (
              <ListItem
                key={item.id}
                item={item}
                listType={props.listType}
                modType={props.modType}
                dispatchListState={props.dispatchListState}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default ListItemContainer;
