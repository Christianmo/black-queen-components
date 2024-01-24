"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledParagraph = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledParagraph = (0, styled_components_1.default)('p') `
  line-height: 1.5;
  margin: 0 0 20px 0;

  &:last-child {
    margin-bottom: 0;
  }

  ${props => props.size === 'sm' && `
    font-size: ${props.theme.fontSizes.sm};
  `}

  ${props => props.size === 'md' && `
    font-size: ${props.theme.fontSizes.md};
  `}

  ${props => props.size === 'lg' && `
    font-size: ${props.theme.fontSizes.lg};
  `}
`;
