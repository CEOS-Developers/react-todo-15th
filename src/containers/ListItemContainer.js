import React, { useCallback, useMemo } from "react";
import ListItem from "../components/ListItem";

const ListItemContainer = (props) => {
  return (
    <section className="itemSection">
      <h4>
        {props.title}(<p className="itemCount">{props.cnt}</p>)
      </h4>
      <div className="itemList">
        {props.listState.map((item) => {
          if (item.type === props.listType) {
            return (
              <ListItem
                key={item.id}
                item={item}
                listType={props.listType}
                modType={props.modType}
                clickHandler={props.clickHandler}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default ListItemContainer;
