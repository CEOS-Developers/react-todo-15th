import React, { useCallback, useMemo } from "react";
import ListItem from "../components/ListItem";

const ListItemContainer = (props) => {
  return (
    <section className="todoSection">
      <h4>
        {props.title}(<p className="todoCount">{props.cnt}</p>)
      </h4>
      <div className="todoList">
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
