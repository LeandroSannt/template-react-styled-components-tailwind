import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 100%; //16px
    }

    @media (max-width: 720px) {
      font-size: 75%; //12px
    }
  }

  body {
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    color: ${theme.colors.textNavlink};
  }

  body,
  input,
  textarea,
  button {
    font-family: ${theme.font.family};
    font-weight: 300;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h5,
  strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border: 0px;
    background: none;
    outline: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  *::-webkit-scrollbar {
    width: 1.1rem;
    height: 1.1rem;
  }

  *::-webkit-scrollbar-track {
    background: ${theme.colors.gray[25]};
  }

  *::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray[200]};
    border-radius: 10px;
  }
`;
