"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

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
}

html,
body{
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
}

/* body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
} */

body {
  padding: 4rem 2.4rem;
  /* display: flex; */
}

a {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyles;
