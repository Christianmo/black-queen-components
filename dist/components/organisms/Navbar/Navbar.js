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
exports.Navbar = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const Image_1 = require("../../atoms/Image");
const Hamburger_1 = require("../../atoms/Hamburger");
const Menu_1 = require("../../molecules/Menu");
const Navbar_styled_1 = require("./Navbar.styled");
const Navbar = ({ className = 'bq-navbar', logo, isotype, links }) => {
    const [isMenuOpen, setMenuState] = (0, react_1.useState)(false);
    const [isNavbarFixed, setHeaderState] = (0, react_1.useState)(false);
    const headerEl = (0, react_1.useRef)();
    const handleScroll = () => {
        var _a;
        const height = (_a = headerEl === null || headerEl === void 0 ? void 0 : headerEl.current) === null || _a === void 0 ? void 0 : _a.offsetHeight;
        const top = window.pageYOffset || document.documentElement.scrollTop;
        const isFixed = top > height;
        setHeaderState(isFixed);
    };
    const setHandleScroll = () => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    };
    const handleClick = () => {
        setMenuState(state => !state);
    };
    (0, react_1.useEffect)(() => {
        setHandleScroll();
    }, []);
    return (react_1.default.createElement(Navbar_styled_1.Wrapper, { className: (0, classnames_1.default)(className, { 'is-fixed': isNavbarFixed }), ref: headerEl },
        react_1.default.createElement(Navbar_styled_1.Container, null,
            react_1.default.createElement(Navbar_styled_1.Column, null,
                react_1.default.createElement(Image_1.Image, { src: logo.src, alt: logo.alt, height: logo.height, width: logo.width, isSingle: true })),
            react_1.default.createElement(Navbar_styled_1.Column, null,
                react_1.default.createElement(Menu_1.Menu, { links: links, isOpen: isMenuOpen, isFixed: isNavbarFixed })),
            react_1.default.createElement(Navbar_styled_1.Column, null,
                react_1.default.createElement(Hamburger_1.Hamburger, { isOpen: isMenuOpen, onClick: handleClick })))));
};
exports.Navbar = Navbar;
