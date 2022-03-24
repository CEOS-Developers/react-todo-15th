import { React, useState, useReducer, useEffect } from "react";
import { FaBookReader } from "react-icons/fa";

import InputContainer from "./containers/InputContainer";
import ListItemContainer from "./containers/ListItemContainer";

//로컬 스토리지의 정보구성 {list: {item1, item2, ...}}

const initList = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : [];

const listReducer = (state, action) => {
  let listBuffer = [];
  //DELETE = 아이템 삭제, ADD = 아이템 추가, MODIFY = 아이템 type 수정(done/todo)
  switch (action.type) {
    case "DELETE":
      listBuffer = state.filter((item) => item.id !== action.payload.id);
      break;
    case "ADD":
      listBuffer = state.concat([action.payload]);
      break;
    case "MODIFY":
      listBuffer = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      break;
    default:
      listBuffer = [...state];
      break;
  }
  localStorage.setItem("list", JSON.stringify(listBuffer));
  return [...listBuffer];
};

function App() {
  // listState의 item obj는 다음의 형태를 지닌다 {id: "uniqueID", type: "done | todo", content: "item content"}
  const [listState, dispatchListState] = useReducer(listReducer, initList);
  const [listCnt, setListCnt] = useState({ todo: 0, done: 0 });

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
        {/* modType은 MODIFY 시 변경되는 type이다 */}
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
