"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
const react_1 = __importDefault(require("react"));
const isomorphic_dompurify_1 = __importDefault(require("isomorphic-dompurify"));
const List = ({ items, icon: Icon }) => {
    const renderItem = (item, key) => {
        const cleanItemText = isomorphic_dompurify_1.default.sanitize(item.text);
        if (item.href) {
            return (react_1.default.createElement("li", { key: `bq-list-item-${key}`, className: 'bq-list-item' },
                react_1.default.createElement("a", { href: item.href, target: item.target },
                    Icon && react_1.default.createElement(Icon, null),
                    react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: cleanItemText } }))));
        }
        return (react_1.default.createElement("li", { key: `bq-list-item-${key}`, className: 'bq-list-item' },
            Icon && react_1.default.createElement(Icon, null),
            react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: cleanItemText } })));
    };
    return (react_1.default.createElement("ul", { className: 'bq-list' }, items.map(renderItem)));
};
exports.List = List;
