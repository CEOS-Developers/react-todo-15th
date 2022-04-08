import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* fonts */

  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");

  :root {
    --ff-main: "Noto Sans KR", sans-serif;
  }

  /* global attributes */

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* tags */

  p {
    line-height: 1.5;
    font-size: 1rem;
    display: inline;
  }

  /* classes */

  .background {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-color: #fa8bff;
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
    font-family: var(--ff-main);
    color: white;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 2rem;
    border-color: black;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    min-width: 30rem;
  }
`;
