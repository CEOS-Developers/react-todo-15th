import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap);

* {
    box-sizing: border-box;
  }

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Noto Sans KR', 'sans-serif', 'serif';
  color: #3f464d;

  width: 100vw;
  height: 100vh;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;