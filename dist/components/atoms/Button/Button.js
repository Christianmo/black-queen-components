"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button_styled_1 = require("./Button.styled");
const Button = ({ className = "bq-button", label, href, target = '_self', color = "#1280BE", variant = "contained", size = "md", onClick }) => {
    const tag = href ? 'a' : 'button';
    const extraProps = Object.assign(Object.assign(Object.assign({}, (href && { href })), (target && { target })), (onClick && { onClick }));
    return (react_1.default.createElement(Button_styled_1.StyledButton, Object.assign({ className: className, as: tag, name: 'bq-button', variant: variant, size: size, color: color }, extraProps),
        react_1.default.createElement("span", null, label)));
};
exports.Button = Button;
