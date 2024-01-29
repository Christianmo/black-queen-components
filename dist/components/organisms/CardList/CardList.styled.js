"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const utils_1 = require("../../../common/utils");
const constants_1 = require("../../../common/constants");
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = (0, styled_components_1.default)('section') `
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media ${(0, utils_1.mq)(constants_1.breakpoints.medium)} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${(0, utils_1.mq)(constants_1.breakpoints.large)} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  .bq-card {
    display: flex;
    flex-direction: column;
    
    @media ${(0, utils_1.mq)(constants_1.breakpoints.large)} {
      flex-direction: row;
    }     
  }
`;
