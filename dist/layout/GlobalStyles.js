"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = void 0;
const styled_components_1 = require("styled-components");
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle) `
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
