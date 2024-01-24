"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
const react_1 = __importDefault(require("react"));
const Modal_styled_1 = require("./Modal.styled");
const Modal = () => {
    return (react_1.default.createElement(Modal_styled_1.StyledModal, null, "Modal"));
};
exports.Modal = Modal;
