"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = exports.Wrapper = exports.GlobalStyle = void 0;
const styled_components_1 = __importStar(require("styled-components"));
const utils_1 = require("../../../common/utils");
const constants_1 = require("../../../common/constants");
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  body {
    padding-top: ${(props) => props.paddingTop}px;
  }
`;
exports.Wrapper = (0, styled_components_1.default)('div') `
  align-items: center;
  background-color: rgb(255, 255, 255);
  display: flex;
  left: 0;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;

  @media ${(0, utils_1.mq)(constants_1.breakpoints.large, 'min')} {    
    &.is-fixed {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    }
  }
`;
exports.Column = (0, styled_components_1.default)('div') `
  display: flex;
  justify-content: center;
  max-height: 40px;
  width: 100%;

  &:nth-child(1) {
    justify-content: flex-start;
  }

  &:nth-child(2) {
    justify-content: center;
  }

  &:nth-child(3) {
    justify-content: flex-end;

    @media ${(0, utils_1.mq)(constants_1.breakpoints.large, 'min')} {
      button {
        display: none;
      }
    } 
  }  
`;
