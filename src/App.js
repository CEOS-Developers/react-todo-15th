import { React, useState, useReducer, useEffect } from "react";

import InputContainer from "./containers/InputContainer";
import ListItemContainer from "./containers/ListItemContainer";

const initList = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [];

const listReducer = (state, action) => {
  let listBuffer = [];
  switch (action.type) {
    case "DELETE":
      listBuffer = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("list", JSON.stringify(listBuffer));
      return [...listBuffer];
    case "ADD":
      listBuffer = state.concat([action.payload]);
      localStorage.setItem("list", JSON.stringify(listBuffer));
      return [...listBuffer];
    case "MODIFY":
      listBuffer = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      localStorage.setItem("list", JSON.stringify(listBuffer));
      return [...listBuffer];
    default:
      return [...state];
  }
};

function App() {
  const [listState, dispatchListState] = useReducer(listReducer, initList);
  const [listCnt, setListCnt] = useState({ todo: 0, done: 0 });

  // listState의 item obj는 다음의 형태를 지닌다 {id: "uniqueID", type: "done | todo", content: "item content"}

  useEffect(() => {
    setListCnt({
      todo: listState.filter((item) => item.type === "todo").length,
      done: listState.filter((item) => item.type === "done").length,
    });
  }, [listState, setListCnt]);

  return (
    <div className="background">
      <div className="container">
        <InputContainer dispatchListState={dispatchListState} />
        <ListItemContainer
          title={"해야할 일"}
          listState={listState}
          listType={"todo"}
          listCnt={listCnt.todo}
          modType={"done"}
          dispatchListState={dispatchListState}
        />
        <ListItemContainer
          title={"완료한 일"}
          listState={listState}
          listType={"done"}
          listCnt={listCnt.done}
          modType={"todo"}
          dispatchListState={dispatchListState}
        />
      </div>
    </div>
  );
}

export default App;
