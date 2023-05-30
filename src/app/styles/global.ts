"use client";

import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:disabled {
      cursor: not-allowed;
    }
  }

  html {
    font-size: 62.5%;
    font-family: var(--font-poppins);
  }

  html,
  body {
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    padding: 1.6rem;
    display: flex;
    justify-content: center;
    background-color: ${theme.bgColor};
  }

  .container {
    max-width: 500px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`}

`;

export default GlobalStyles;
