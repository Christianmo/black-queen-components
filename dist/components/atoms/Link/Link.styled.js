"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLink = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledLink = (0, styled_components_1.default)('a') `
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
`;
