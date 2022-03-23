import React from "react";

const ListItem = (props) => {
  return (
    <div className="item" id="">
      <div className="itemScrollArea">
        <button className="itemFinish" type="button">
          {props.isDone ? (
            <p className="itemTitle">
              <del>title</del>
            </p>
          ) : (
            <p className="itemTitle">
              loremsdgasdgjuiqhioweuhqiwuhiquwhituhquiweh
            </p>
          )}
        </button>
      </div>
      <button className="itemDelete" type="button">
        <p>
          {/* <i className="fa fa-solid fa-trash"></i> */}
          delete
        </p>
      </button>
    </div>
  );
};

export default ListItem;
