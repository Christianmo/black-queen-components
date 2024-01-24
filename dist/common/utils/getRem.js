"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRem = void 0;
const getRem = (pixels) => {
    const size = Number(pixels.split("px").shift());
    const remSize = size / 16;
    return `${remSize}rem`;
};
exports.getRem = getRem;
