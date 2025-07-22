import type { Key } from 'react';

const isPrimitive = (value: unknown): boolean =>
  !value || !['object', 'function'].includes(typeof value);

const defaultPrimitiveToKey = (value: unknown): Key | null | undefined => {
  if (value === null || value === undefined) {
    return value;
  }

  if (typeof value === 'number') {
    return value;
  }

  if (typeof (value as { toString: () => string }).toString === 'function') {
    return value.toString();
  }

  return String(value);
};

class ReactKeyGen {
  #keysMap = new WeakMap<object, string>();
  #keyBaseName: string;
  #primitiveToKey: (value: unknown) => Key | null | undefined;
  #cpt = -1;

  constructor({ keyBaseName = 'keyGen_', primitiveToKey = defaultPrimitiveToKey } = {}) {
    this.#keyBaseName = keyBaseName;
    this.#primitiveToKey = primitiveToKey;
  }

  #getUniqueKey(): string {
    this.#cpt += 1;
    return `${this.#keyBaseName}${this.#cpt}`;
  }

  getKey(value: unknown): Key | null | undefined {
    if (isPrimitive(value)) {
      return this.#primitiveToKey(value);
    }

    if (typeof value === 'object' && value !== null) {
      const key = this.#keysMap.get(value);

      if (key) {
        return key;
      }

      const newKey = this.#getUniqueKey();
      this.#keysMap.set(value, newKey);
      return newKey;
    }

    return this.#primitiveToKey(value);
  }
}

export default ReactKeyGen;
