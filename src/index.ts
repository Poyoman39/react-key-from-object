type Primitive = string | number | boolean | null | undefined;

const isPrimitive = (value: unknown): boolean =>
  !value || !['object', 'function'].includes(typeof value);

const defaultPrimitiveToKey = (value: Primitive): Primitive =>
  value?.toString ? value.toString() : value;

class ReactKeyGen {
  private keysMap = new WeakMap<object, string>();
  private keyBaseName: string;
  private primitiveToKey: (value: Primitive) => Primitive;
  private cpt = -1;

  constructor({ keyBaseName = 'keyGen_', primitiveToKey = defaultPrimitiveToKey } = {}) {
    this.keyBaseName = keyBaseName;
    this.primitiveToKey = primitiveToKey;
  }

  private getUniqueKey(): string {
    this.cpt += 1;
    return `${this.keyBaseName}${this.cpt}`;
  }

  getKey(value: unknown): Primitive {
    if (isPrimitive(value)) {
      return this.primitiveToKey(value as Primitive);
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

    return this.primitiveToKey(value as Primitive);
  }
}

export default ReactKeyGen;
