"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPrimitive = (value) => !value || !['object', 'function'].includes(typeof value);
const defaultPrimitiveToKey = (value) => value?.toString ? value.toString() : value;
class ReactKeyGen {
    keysMap = new WeakMap();
    keyBaseName;
    primitiveToKey;
    cpt = -1;
    constructor({ keyBaseName = 'keyGen_', primitiveToKey = defaultPrimitiveToKey } = {}) {
        this.keyBaseName = keyBaseName;
        this.primitiveToKey = primitiveToKey;
    }
    getUniqueKey() {
        this.cpt += 1;
        return `${this.keyBaseName}${this.cpt}`;
    }
    getKey(value) {
        if (isPrimitive(value)) {
            return this.primitiveToKey(value);
        }
        if (typeof value === 'object' && value !== null) {
            const key = this.keysMap.get(value);
            if (key) {
                return key;
            }
            const newKey = this.getUniqueKey();
            this.keysMap.set(value, newKey);
            return newKey;
        }
        return this.primitiveToKey(value);
    }
}
exports.default = ReactKeyGen;
