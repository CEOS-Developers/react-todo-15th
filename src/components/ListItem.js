import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";

import { GlobalContext } from "../context/GlobalState";

const ListItem = ({ item }) => {
  const { deleteItem, moveItem } = useContext(GlobalContext);

  return (
    <div className="item">
      <div className="itemScrollArea">
        <button
          className="itemFinish"
          type="button"
          onClick={() => {
            moveItem(item.id);
          }}
        >
          <p className="itemTitle">
            {/* listType의 done/todo에 따라 del 태그 삽입 */}
            {item.type === "done" ? <del>{item.content}</del> : item.content}
          </p>
        </button>
      </div>
      <button
        className="itemDelete"
        type="button"
        onClick={() => {
          deleteItem(item.id);
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
