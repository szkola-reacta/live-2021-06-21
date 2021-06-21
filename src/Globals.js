import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
// import { fontsLato } from "./Fonts";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * { box-sizing: border-box; }
  body {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.white};
  }
  h1, h2, h3, h4, h5, h6 { margin: 0; }
  a {
    text-decoration: none;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.blue0};
  }
`;
