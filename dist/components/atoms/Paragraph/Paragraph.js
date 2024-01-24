"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = void 0;
const react_1 = __importDefault(require("react"));
const isomorphic_dompurify_1 = __importDefault(require("isomorphic-dompurify"));
const Paragraph_styled_1 = require("./Paragraph.styled");
const Paragraph = ({ text, size = 'md' }) => {
    const cleanText = isomorphic_dompurify_1.default.sanitize(text);
    return (react_1.default.createElement(Paragraph_styled_1.StyledParagraph, { className: 'bq-paragraph', size: size, dangerouslySetInnerHTML: { __html: cleanText } }));
};
exports.Paragraph = Paragraph;
