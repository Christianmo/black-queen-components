"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mq = void 0;
const mq = (breakpoint, type = 'min') => {
    return `(${type}-width: ${breakpoint}px)`;
};
exports.mq = mq;
