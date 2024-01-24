"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.Logo = exports.Menus = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = (0, styled_components_1.default)('div') `
  display: flex;
  padding: 20px 0;
`;
exports.Menus = (0, styled_components_1.default)('div') `
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
exports.Logo = (0, styled_components_1.default)('div') `

`;
exports.Menu = (0, styled_components_1.default)('div') `
  width: 33.33%;
`;
