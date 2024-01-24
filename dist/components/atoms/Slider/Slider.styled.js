"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletButton = exports.Bullets = exports.ArrowButton = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = (0, styled_components_1.default)('div') `
  padding: 50px 70px;
  position: relative;
`;
exports.ArrowButton = (0, styled_components_1.default)('button') `
  align-items: center;
  background-color: white;
  border: 0;
  border-radius: 50%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  height: 30px;
  padding: 0;
  position: absolute;
  width: 30px;
  top: 50%;
  transform: translateY(-10px);

  &:first-child {
    left: 20px;
    padding-left: 5px;

    span {
      transform: rotate(-40deg);
    }
  }

  &:last-child {
    padding-right: 5px;
    right: 20px;

    span {
      transform: rotate(135deg);
    }
  }  

  span {
    border-top: solid #000 1px;
    border-left: solid #000 1px;
    color: transparent;
    display: inline-block;
    width: 12px;
    height: 12px;
  }
`;
exports.Bullets = (0, styled_components_1.default)('div') `
  display: flex;
`;
exports.BulletButton = (0, styled_components_1.default)('button') `
  border: 0;
  border-radius: 50%;
  width: 12px;
  height: 12px;
`;
