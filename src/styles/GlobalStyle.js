import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

html,
body {
  margin: 0;
  padding: 0;
}

body{
  width: 100vw;
  height: 100vh;

  /* Center Container */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Coloring */
  background: #FBFBFD;
}

p{  
  font-size: 16px;
  line-height: 24px;
  margin-block-start: 0px;
  margin-block-end: 6px;
}
::placeholder {
  color: #ADB5BD;
  opacity: 1; /* Firefox */
}
input:focus , select:focus, option:focus, textarea:focus, button:focus{
  outline: none;
}
button:hover {
  cursor: pointer
}
`;

export default GlobalStyle;
