"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTitle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledTitle = (0, styled_components_1.default)('div') `
  margin: 0 0;
  
  ${props => props.variant === 'title' && `
    font-size: ${props.theme.fontSizes.xxlg};
    margin: 0;
  `}

  ${props => props.variant === 'subtitle' && `
    font-size: ${props.theme.fontSizes.lg};
    margin: 0;
  `}
`;
