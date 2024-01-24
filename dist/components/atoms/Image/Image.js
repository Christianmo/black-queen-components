"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const react_1 = __importDefault(require("react"));
const handleSrc = ({ src }) => {
    const srcArr = src.split('.');
    const ext = srcArr.pop();
    const path = srcArr.join('.');
    return { ext, path };
};
const Image = ({ src, width, height, alt, isSingle, className = 'bq-image' }) => {
    const { path, ext } = handleSrc({ src });
    if (isSingle) {
        return (react_1.default.createElement("img", { src: src, alt: alt, width: width, height: height, decoding: "async", className: className }));
    }
    return (react_1.default.createElement("picture", { className: 'bq-picture' },
        react_1.default.createElement("source", { srcSet: `${path}@2x.webp`, media: "(max-width: 1023px)", type: "image/webp" }),
        react_1.default.createElement("source", { srcSet: `${path}@3x.webp`, media: "(min-width: 1024px)", type: "image/webp" }),
        react_1.default.createElement("source", { srcSet: `${path}@2x.${ext}`, media: "(max-width: 1023px)", type: `image/${ext}` }),
        react_1.default.createElement("source", { srcSet: `${path}@3x.${ext}`, media: "(min-width: 1024px)", type: `image/${ext}` }),
        react_1.default.createElement("img", { src: `${path}@2x.${ext}`, alt: alt, width: width, height: height, decoding: "async", className: className })));
};
exports.Image = Image;
