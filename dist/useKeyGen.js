"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const index_1 = __importDefault(require("./index"));
const useKeyGen = () => {
    const getKeyCounterRef = (0, react_1.useRef)(0);
    getKeyCounterRef.current = 0;
    const keyGen = (0, react_1.useMemo)(() => new index_1.default({
        primitiveToKey: () => {
            getKeyCounterRef.current += 1;
            return getKeyCounterRef.current;
        },
    }), []);
    return keyGen;
};
exports.default = useKeyGen;
