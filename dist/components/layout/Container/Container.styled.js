"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const constants_1 = require("../../../common/constants");
const utils_1 = require("../../../common/utils");
const styled_components_1 = __importDefault(require("styled-components"));
exports.Component = (0, styled_components_1.default)('div') `
  box-sizing: border-box;
  margin: auto;
  padding: 0 ${(0, utils_1.getRem)('24px')};
  width: 100%;

  @media ${(0, utils_1.mq)(constants_1.breakpoints.small)} {
    max-width: 540px;
  }

  @media ${(0, utils_1.mq)(constants_1.breakpoints.medium)} {
    max-width: 768px;
  }

  @media ${(0, utils_1.mq)(constants_1.breakpoints.large)} {
    max-width: 960px;
  }

  @media ${(0, utils_1.mq)(constants_1.breakpoints.xlarge)} {
    max-width: 1140px;
  }

  @media ${(0, utils_1.mq)(constants_1.breakpoints.xxlarge)} {
    max-width: 1320px;
  }
`;
