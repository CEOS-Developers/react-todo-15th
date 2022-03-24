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
          <p className="itemTitle">
            {/* listType의 done/todo에 따라 del 태그 삽입 */}
            {props.listType === "done" ? (
              <del>{props.item.content}</del>
            ) : (
              props.item.content
            )}
          </p>
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
