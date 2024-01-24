"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Link_1 = require("../../atoms/Link");
const Menu_styled_1 = require("./Menu.styled");
const renderLink = ({ label, href }, index) => {
    return (react_1.default.createElement("li", { key: `bq-menu-${index}` },
        react_1.default.createElement(Link_1.Link, { label: label, href: href })));
};
const Menu = ({ className = "bq-menu", links, isOpen, isFixed }) => {
    return (react_1.default.createElement(Menu_styled_1.Container, { className: (0, classnames_1.default)(className, { 'is-open': isOpen }, { 'is-fixed': isFixed }) },
        react_1.default.createElement(Menu_styled_1.List, null, links.map(renderLink))));
};
exports.Menu = Menu;
