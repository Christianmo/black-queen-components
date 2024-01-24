"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledButton = (0, styled_components_1.default)('button') `
  align-items: center;
  border-radius: 100px;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  span {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes[props.size]};
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
  }

  ${props => props.variant === 'basic' && `
    background-color: transparent;
    padding: 5px 15px;

    span {
      color: ${props.color};
    }
  `}

  ${props => props.variant === 'outline' && `
    background-color: transparent;
    border: solid ${props.color} 1px;
    padding: 10px 30px;

    &:hover {
      box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.35);     
    }

    span {
      color: ${props.color};
    }
  `}

  ${props => props.variant === 'contained' && `
    background-color: ${props.color};
    border: solid ${props.color} 1px;
    padding: 10px 30px;

    &:hover {
      box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.35);     
    }

    span {
      color: ${props.theme.colors.white};
    }
  `}

  ${props => props.size === 'sm' && `
    height: 40px;

    span {
      font-size: ${props.theme.fontSizes.sm};
    }
  `}

  ${props => props.size === 'md' && `
    height: 50px;

    span {
      font-size: ${props.theme.fontSizes.md};
    }
  `}

  ${props => props.size === 'lg' && `
    height: 60px;

    span {
      font-size: ${props.theme.fontSizes.lg};
    }
  `}
`;
