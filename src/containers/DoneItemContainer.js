import React from "react";
import ListItem from "../components/ListItem";

const DoneItemContainer = () => {
  return (
    <section className="doneSection">
      <h4>
        마무리한 일 (<p className="doneCount"></p>)
      </h4>
      <div className="doneList"></div>
    </section>
  );
};

export default DoneItemContainer;
