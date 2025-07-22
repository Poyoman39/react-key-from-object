type Primitive = string | number | boolean | null | undefined;
declare class ReactKeyGen {
    #private;
    constructor({ keyBaseName, primitiveToKey }?: {
        keyBaseName?: string | undefined;
        primitiveToKey?: ((value: Primitive) => Primitive) | undefined;
    });
    getKey(value: unknown): Primitive;
}
export default ReactKeyGen;
