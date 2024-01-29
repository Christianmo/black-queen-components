"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const react_1 = __importDefault(require("react"));
const Container_styled_1 = require("./Container.styled");
const Container = ({ children }) => {
    return (react_1.default.createElement(Container_styled_1.Component, null, children));
};
exports.Container = Container;
