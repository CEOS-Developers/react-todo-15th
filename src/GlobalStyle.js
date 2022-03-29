import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
@font-face {
    font-family: 'SuncheonB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/SuncheonB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body{

    font-family: 'SuncheonB';
    font-size: 15px;
    display: flex;
    width: 100vh;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

  
}

`;

export default GlobalStyle;
