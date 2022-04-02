import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Noto Sans KR", sans-serif;
    background: linear-gradient(to bottom right, #7f7fd5, #86a8e7, #91eae4);
  }
  ul {
    height: 150px;
    overflow: auto;
    list-style: none;
    padding-left: 10px;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 15px;
    }
  }
`;

export default GlobalStyle;
