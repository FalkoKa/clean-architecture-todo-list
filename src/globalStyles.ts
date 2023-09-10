import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    box-sizing: border-box;
    margin: 0;
    font-family: sans-serif;
    font-size: 1.3rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      margin: 0;
    }

    h2 {
      margin: 0;
      font-size: 1.3rem;
    }
  }
`;

export default GlobalStyle;
