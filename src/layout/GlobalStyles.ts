import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&family=Roboto+Flex:opsz@8..144&display=swap');
  
  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Oswald';
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Roboto Flex';
  }
`;
 