"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const utils_1 = require("../../../common/utils");
const constants_1 = require("../../../common/constants");
exports.Container = (0, styled_components_1.default)('div') `
  @media ${(0, utils_1.mq)(constants_1.breakpoints.large - 1, 'max')} {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.25);
    height: 100vh;
    opacity: 0;
    padding: 50px 20px 20px;
    position: absolute;
    transition: all 0.2s ease-in-out;
    top: 0;
    right: -100%;
    width: 80%;
    z-index: 10;

    &.is-open {
      background-color: white;
      opacity: 1;
      padding: 20px;
      right: 0%;
    }
  }
`;
exports.List = (0, styled_components_1.default)('ul') `
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-right: ${(0, utils_1.getRem)('30px')};

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    display: block;
    padding: 10px;
    position: relative;

    &:hover {
      text-decoration: none;
    }
  }

  @media ${(0, utils_1.mq)(constants_1.breakpoints.large, 'min')} {
    display: flex;
  
    li {
      display: inline-flex;

      a {
        &:hover {
          text-decoration: none;
        }      
      }
    }
  }
`;
