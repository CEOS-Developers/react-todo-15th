import React from "react";

const ListItemContainer = () => {
  return (
    <section className="todoSection">
      <h4>
        해야할 일 (<p className="todoCount"></p>)
      </h4>
      <div className="todoList"></div>
    </section>
  );
};

export default ListItemContainer;
