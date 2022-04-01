import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/COLORS';

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    * {
        font-family: 'Pretendard-Regular';
    }

    *:focus {
        outline: none;
    }

    body {
        margin: 0;
        height: 100vh;
        
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${COLORS.darkgrey};
        background: radial-gradient(
      circle at 50% 0,
      rgba(255, 38, 38, 0.5),
      rgba(255, 0, 0, 0) 70.71%
    ),
    radial-gradient(
      circle at 6.7% 75%,
      rgba(30, 30, 255, 0.5),
      rgba(0, 0, 255, 0) 70.71%
    ),
    radial-gradient(
        circle at 93.3% 75%,
        rgba(63, 255, 63, 0.287),
        rgba(0, 255, 0, 0) 70.71%
      )
      beige;
    }    
`;
