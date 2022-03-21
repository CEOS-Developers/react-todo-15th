import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

html,
body {
  margin: 0;
  padding: 0;
}

/* should be deleted before finished */
/* *{
  border: 1px solid black;
} */

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
h3 {
  margin-top: 12px;
  margin-bottom:0;
}
ul{
  list-style:none;
  padding-left:0px;
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
