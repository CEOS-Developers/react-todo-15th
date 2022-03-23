import React from "react";

const ListItemContainer = () => {
  return (
    <section class="todoSection">
      <h4>
        해야할 일 (<p class="todoCount"></p>)
      </h4>
      <div class="todoList"></div>
    </section>
  );
};

export default ListItemContainer;
