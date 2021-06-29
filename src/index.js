const compatibleKeyTypes = ['object', 'function'];

function ReactKeyGen({
  keyBaseName = 'keyGen_',
} = {}) {
  const keysMap = new WeakMap();

  const getUniqueKey = (() => {
    let cpt = -1;

    return () => {
      cpt += 1;

      return `${keyBaseName}${cpt}`;
    };
  })();

  this.getKey = (whatever) => {
    if (!compatibleKeyTypes.includes(typeof whatever)) {
      return whatever.toString ? whatever.toString() : whatever;
    }

    const key = keysMap.get(whatever);

    if (key) {
      return key;
    }

    const newKey = getUniqueKey();

    keysMap.set(whatever, newKey);

    return newKey;
  };
}

export default ReactKeyGen;
