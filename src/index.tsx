import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { TodoProvider } from "contexts";
import GlobalStyle from "style/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
