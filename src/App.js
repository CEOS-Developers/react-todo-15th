import { React, useState, useReducer, useEffect } from "react";

import InputContainer from "./containers/InputContainer";
import ListItemContainer from "./containers/ListItemContainer";

const initList = [];

const listReducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return [...state.filter((item) => item.id !== action.payload.id)];
    case "ADD":
      return [...state, action.payload];
    case "MODIFY":
      return [
        ...state.map((item) => {
          if (item.id === action.payload.id) return action.payload;
        }),
      ];
  }
};

function App() {
  const [listState, dispatchListState] = useReducer(listReducer, initList);
  const [listCnt, setListCnt] = useState({ todo: 0, done: 0 });

  const clickHandler = (actionType, uid, itemType, contentData) => {
    dispatchListState({
      type: actionType,
      payload: {
        id: uid,
        type: itemType,
        content: contentData,
      },
    });
  };

  useEffect(() => {
    console.log(listState);
  }, [listState]);

  return (
    <div className="background">
      <div className="container">
        <InputContainer clickHandler={clickHandler} />
        <ListItemContainer
          title={"해야할 일"}
          listState={listState}
          listType={"todo"}
          listCnt={listCnt.todo}
          modType={"done"}
          clickHandler={clickHandler}
        />
        <ListItemContainer
          title={"완료한 일"}
          listState={listState}
          listType={"done"}
          listCnt={listCnt.done}
          modType={"todo"}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
}

export default App;
