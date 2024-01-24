"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardInfo = exports.CardImage = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = (0, styled_components_1.default)('div') `
  box-sizing: border-box;
  padding: 30px 20px;
  border: solid 1px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.125);
  border-color ${(props) => props.theme.colors.black};
  border-radius: 8px;
  display: flex;
  max-width: 500px;
`;
exports.CardImage = (0, styled_components_1.default)('div') `
  box-sizing: border-box;
  margin-right: 30px;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;
exports.CardInfo = (0, styled_components_1.default)('div') `
  box-sizing: border-box;
  width: 100%;
`;
