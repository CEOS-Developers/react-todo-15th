import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');
    body {
        margin: 0px;
        background-color: #8989bb;
        background-image: linear-gradient(315deg, #8989bb 0%, #a5a4cb 74%);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default GlobalStyle;
