"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyGen = void 0;
const ReactKeyGen_1 = __importDefault(require("./ReactKeyGen"));
const useKeyGen_1 = __importDefault(require("./useKeyGen"));
exports.useKeyGen = useKeyGen_1.default;
exports.default = ReactKeyGen_1.default;
