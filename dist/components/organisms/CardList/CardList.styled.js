"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = (0, styled_components_1.default)('section') `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  .bq-card {
    max-width: calc(50% - 20px);
    margin-bottom: 40px;
  }
`;
