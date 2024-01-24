"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const react_1 = __importDefault(require("react"));
const Title_styled_1 = require("./Title.styled");
const Title = ({ className = 'bq-title', text, variant = 'title', tag = 'h1' }) => {
    return (react_1.default.createElement(Title_styled_1.StyledTitle, { as: tag, className: className, variant: variant }, text));
};
exports.Title = Title;
