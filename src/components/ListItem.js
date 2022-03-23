import React from "react";

const ListItem = (props) => {
  return (
    <div class="item" id="">
      <div class="itemScrollArea">
        <button class="itemFinish" type="button">
          {props.isDone ? (
            <p class="itemTitle">
              <del>title</del>
            </p>
          ) : (
            <p class="itemTitle">loremsdgasdgjuiqhioweuhqiwuhiquwhituhquiweh</p>
          )}
        </button>
      </div>
      <button class="itemDelete" type="button">
        <p>
          {/* <i class="fa fa-solid fa-trash"></i> */}
          delete
        </p>
      </button>
    </div>
  );
};

export default ListItem;
