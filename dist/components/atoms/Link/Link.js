"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const react_1 = __importDefault(require("react"));
const Link_styled_1 = require("./Link.styled");
const Link = ({ href, label, target = "_self" }) => {
    return (react_1.default.createElement(Link_styled_1.StyledLink, { className: "bq-link", href: href, target: target }, label));
};
exports.Link = Link;
