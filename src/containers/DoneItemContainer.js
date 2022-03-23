import React from "react";
import ListItem from "../components/ListItem";

const DoneItemContainer = () => {
  return (
    <section class="doneSection">
      <h4>
        마무리한 일 (<p class="doneCount"></p>)
      </h4>
      <div class="doneList"></div>
    </section>
  );
};

export default DoneItemContainer;
