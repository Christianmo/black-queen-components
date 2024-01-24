"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const react_1 = __importDefault(require("react"));
const Title_1 = require("../../atoms/Title");
const Paragraph_1 = require("../../atoms/Paragraph");
const Button_1 = require("../../atoms/Button");
const Image_1 = require("../../atoms/Image");
const Card_styled_1 = require("./Card.styled");
const Card = ({ className = "bq-card", title, description, image, action }) => {
    return (react_1.default.createElement(Card_styled_1.Container, { className: className },
        image && react_1.default.createElement(Card_styled_1.CardImage, { className: "bq-card-image" },
            react_1.default.createElement(Image_1.Image, { src: image.src, alt: image.alt, width: image.width, height: image.height, isSingle: true })),
        react_1.default.createElement(Card_styled_1.CardInfo, { className: "bq-card-info" },
            react_1.default.createElement(Title_1.Title, { text: title, variant: "subtitle", tag: "h3" }),
            react_1.default.createElement(Paragraph_1.Paragraph, { text: description }),
            action && react_1.default.createElement(Button_1.Button, { label: action.label, href: action.href, target: action.target }))));
};
exports.Card = Card;
