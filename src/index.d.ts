type Primitive = string | number | boolean | null | undefined;
declare class ReactKeyGen {
    private keysMap;
    private keyBaseName;
    private primitiveToKey;
    private cpt;
    constructor({ keyBaseName, primitiveToKey }?: {
        keyBaseName?: string | undefined;
        primitiveToKey?: ((value: Primitive) => Primitive) | undefined;
    });
    private getUniqueKey;
    getKey(value: unknown): Primitive;
}
export default ReactKeyGen;
