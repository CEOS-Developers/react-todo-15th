import React from "react";

import { GlobalProvider } from "./context/GlobalContext";
import InputContainer from "./containers/InputContainer";
import ListItemContainer from "./containers/ListItemContainer";
import GlobalStyle from "./GlobalStyles";
import { ItemType } from "./Objects";

function App() {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <div className="background">
        <div className="container">
          <InputContainer />
          <ListItemContainer title={"해야할 일"} listType={ItemType.Todo} />
          <ListItemContainer title={"완료한 일"} listType={ItemType.Done} />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
