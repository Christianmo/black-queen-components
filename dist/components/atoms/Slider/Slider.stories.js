"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Glide = void 0;
const react_1 = __importDefault(require("react"));
const Slider_1 = require("./Slider");
const meta = {
    title: 'Atom/Slider',
    component: Slider_1.GlideSlider,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
exports.default = meta;
const slideContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
exports.Glide = {
    args: {
        children: [
            react_1.default.createElement("div", null, slideContent),
            react_1.default.createElement("div", null, slideContent),
            react_1.default.createElement("div", null, slideContent),
        ],
        options: {
            type: 'carousel',
            focusAt: 'center',
            perView: 1
        },
        length: 3,
        hasBullets: true,
        hasArrows: true,
    },
};
