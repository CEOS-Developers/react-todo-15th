import React from "react";

const ListItem = (props) => {
  console.log(props.modType);

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
        <p>
          {/* <i className="fa fa-solid fa-trash"></i> */}
          delete
        </p>
      </button>
    </div>
  );
};

export default ListItem;
