"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const react_1 = __importDefault(require("react"));
const Title_1 = require("../../atoms/Title");
const List_1 = require("../../atoms/List");
const Image_1 = require("../../atoms/Image");
const Footer_styled_1 = require("./Footer.styled");
const renderMenu = (menu, index) => {
    return (react_1.default.createElement(Footer_styled_1.Menu, { key: `bq-footer-column-${index}` },
        react_1.default.createElement(Title_1.Title, { text: menu.title, tag: "h4" }),
        react_1.default.createElement(List_1.List, { items: menu.links })));
};
const Footer = ({ logo, menus, className = "bq-footer" }) => {
    return (react_1.default.createElement(Footer_styled_1.Container, { className: className },
        react_1.default.createElement(Footer_styled_1.Logo, null,
            react_1.default.createElement(Image_1.Image, { src: logo.src, alt: logo.alt, height: logo.height, width: logo.width, isSingle: true })),
        react_1.default.createElement(Footer_styled_1.Menus, null, menus.map(renderMenu))));
};
exports.Footer = Footer;
