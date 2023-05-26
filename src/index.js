const isPrimitive = (value) => !value || !['object', 'function'].includes(typeof value);

const defaultPrimitiveToKey = (value) => (
  value?.toString ? value.toString() : value
);

function ReactKeyGen({
  keyBaseName = 'keyGen_',
  primitiveToKey = defaultPrimitiveToKey,
} = {}) {
  const keysMap = new WeakMap();

  const getUniqueKey = (() => {
    let cpt = -1;

    return () => {
      cpt += 1;

      return `${keyBaseName}${cpt}`;
    };
  })();

  this.getKey = (value) => {
    if (isPrimitive(value)) {
      return primitiveToKey(value);
    }

    const key = keysMap.get(value);

    if (key) {
      return key;
    }

    const newKey = getUniqueKey();

    keysMap.set(value, newKey);

    return newKey;
  };
}

export default ReactKeyGen;
