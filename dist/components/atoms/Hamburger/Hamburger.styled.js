"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bar = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = (0, styled_components_1.default)('button') `
  background: none;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: inline-block;
  padding: 0;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 24px;
  z-index: 10;

  &.is-open {
    span {
      background-color: grey;
  
      &:nth-child(1) {
        transform: rotate(45deg) translate3d(4px, 4px, 0);
        margin: 0;
      }
  
      &:nth-child(2) {
        opacity: 0;
      }
  
      &:nth-child(3) {
        transform: rotate(-45deg) translate3d(4px, -4px, 0);
        margin: 0;
      }
    }
  }
`;
exports.Bar = (0, styled_components_1.default)('span') `
  background-color: grey;
  border-radius: 2px;
  display: block;
  height: 3px;
  margin-bottom: 5px;
  transition: all 0.2s ease-in-out;

  &:last-child {
    margin-bottom: 0;
  }
`;
