import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: ${({ theme }) => theme.fonts.primary}, sans-serif;
  }
`;

export default GlobalStyles;
