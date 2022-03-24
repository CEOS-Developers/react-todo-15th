import React from "react";
import { FaTrash } from "react-icons/fa";

const ListItem = (props) => {
  return (
    <div className="item">
      <div className="itemScrollArea">
        <button
          className="itemFinish"
          type="button"
          onClick={() => {
            props.clickHandler(
              "MODIFY",
              props.item.id,
              props.modType,
              props.item.content
            );
          }}
        >
          {props.listType === "done" ? (
            <p className="itemTitle">
              <del>{props.item.content}</del>
            </p>
          ) : (
            <p className="itemTitle">{props.item.content}</p>
          )}
        </button>
      </div>
      <button
        className="itemDelete"
        type="button"
        onClick={() => {
          props.clickHandler(
            "DELETE",
            props.item.id,
            props.item.type,
            props.item.content
          );
        }}
      >
        <p className="deleteIcon">
          <FaTrash />
        </p>
      </button>
    </div>
  );
};

export default ListItem;
