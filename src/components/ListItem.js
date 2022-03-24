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
            props.dispatchListState({
              type: "MODIFY",
              payload: {
                id: props.item.id,
                type: props.modType,
                content: props.item.content,
              },
            });
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
          props.dispatchListState({
            type: "DELETE",
            payload: {
              id: props.item.id,
              type: props.item.type,
              content: props.item.content,
            },
          });
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
