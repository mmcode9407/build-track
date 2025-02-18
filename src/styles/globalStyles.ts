import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
