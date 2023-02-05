"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.validateUrl = void 0;
const nanoid_1 = require("nanoid");
const validateUrl = (url) => {
    return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(url);
};
exports.validateUrl = validateUrl;
const generateId = (size) => {
    return (0, nanoid_1.nanoid)(size || 6);
};
exports.generateId = generateId;
//# sourceMappingURL=utils.js.map