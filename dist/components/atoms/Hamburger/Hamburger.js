"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hamburger = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Hamburger_styled_1 = require("./Hamburger.styled");
const Hamburger = ({ className = "bq-hamburger", isOpen = false, onClick }) => {
    return (react_1.default.createElement(Hamburger_styled_1.Container, { className: (0, classnames_1.default)(className, { 'is-open': isOpen }), onClick: onClick },
        react_1.default.createElement(Hamburger_styled_1.Bar, null),
        react_1.default.createElement(Hamburger_styled_1.Bar, null),
        react_1.default.createElement(Hamburger_styled_1.Bar, null)));
};
exports.Hamburger = Hamburger;
