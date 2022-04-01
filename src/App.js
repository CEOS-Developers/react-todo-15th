import { React, useState, useReducer, useEffect } from "react";
import { FaBookReader } from "react-icons/fa";

import { GlobalProvider } from "./context/GlobalState";
import InputContainer from "./containers/InputContainer";
import ListItemContainer from "./containers/ListItemContainer";

//로컬 스토리지의 정보구성 {list: {item1, item2, ...}}

function App() {
  // listState의 item obj는 다음의 형태를 지닌다 {id: "uniqueID", type: "done | todo", content: "item content"}

  return (
    <GlobalProvider>
      <div className="background">
        <div className="container">
          <InputContainer />
          {/* modType은 MODIFY 시 변경되는 type이다 */}
          <ListItemContainer
            title={"해야할 일"}
            listType={"todo"} // 2: todoList
          />
          <ListItemContainer
            title={"완료한 일"}
            listType={"done"} // -2: doneList
          />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
