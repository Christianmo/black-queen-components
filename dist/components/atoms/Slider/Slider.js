"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlideSlider = void 0;
const react_1 = __importStar(require("react"));
const glide_1 = __importDefault(require("@glidejs/glide"));
require("@glidejs/glide/dist/css/glide.core.min.css");
require("@glidejs/glide/dist/css/glide.theme.min.css");
const Slider_styled_1 = require("./Slider.styled");
const GlideSlider = ({ children, options, length, hasBullets, hasArrows, }) => {
    const glideRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const glide = new glide_1.default(glideRef.current, options);
        glide.mount();
        return () => glide.destroy();
    }, []);
    const renderBullet = (_, key) => (react_1.default.createElement(Slider_styled_1.BulletButton, { className: "bq-slider-bullet", "data-glide-dir": `=${key}`, key: `bullet_${key}` }));
    return (react_1.default.createElement(Slider_styled_1.Container, { ref: glideRef, className: 'glide bq-slider' },
        react_1.default.createElement("div", { "data-glide-el": "track", className: "glide__track" },
            react_1.default.createElement("div", { className: "glide__slides" }, react_1.Children.map(children, child => react_1.default.createElement("div", { className: "glide__slide" }, child)))),
        hasArrows && (react_1.default.createElement("div", { className: "glide__arrows", "data-glide-el": "controls" },
            react_1.default.createElement(Slider_styled_1.ArrowButton, { className: "bq-slider-arrow", "data-glide-dir": "<" },
                react_1.default.createElement("span", null, "\u2039")),
            react_1.default.createElement(Slider_styled_1.ArrowButton, { className: "bq-slider-arrow", "data-glide-dir": ">" },
                react_1.default.createElement("span", null, "\u203A")))),
        hasBullets && (react_1.default.createElement(Slider_styled_1.Bullets, { className: "bq-slider-bullets", "data-glide-el": "controls[nav]" }, new Array(length).fill('.').map(renderBullet)))));
};
exports.GlideSlider = GlideSlider;
