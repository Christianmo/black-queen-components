"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionHeader = void 0;
const react_1 = __importDefault(require("react"));
const atoms_1 = require("../../atoms");
const SectionHeader_styled_1 = require("./SectionHeader.styled");
const SectionHeader = ({ className = "bq-section-header", titleTag = "h3", helpText, title, description }) => {
    return (react_1.default.createElement("div", { className: className },
        helpText && react_1.default.createElement(SectionHeader_styled_1.HelpText, { className: "bq-helptext" }, helpText),
        react_1.default.createElement(atoms_1.Title, { text: title, tag: titleTag }),
        react_1.default.createElement(atoms_1.Paragraph, { text: description })));
};
exports.SectionHeader = SectionHeader;
