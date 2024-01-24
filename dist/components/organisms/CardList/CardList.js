"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardList = void 0;
const react_1 = __importDefault(require("react"));
const Card_1 = require("../../molecules/Card");
const CardList_styled_1 = require("./CardList.styled");
const CardList = ({ className = 'bq-card-list', cards }) => {
    return (react_1.default.createElement(CardList_styled_1.Container, { className: className }, cards.map((card, key) => (react_1.default.createElement(Card_1.Card, { title: card.title, description: card.description, image: card.image, action: card.action, key: `bq-card-${key}` })))));
};
exports.CardList = CardList;
