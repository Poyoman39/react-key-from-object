import type { Key } from 'react';
declare class ReactKeyGen {
    #private;
    constructor({ keyBaseName, primitiveToKey }?: {
        keyBaseName?: string | undefined;
        primitiveToKey?: ((value: unknown) => Key | null | undefined) | undefined;
    });
    getKey(value: unknown): Key | null | undefined;
}
export default ReactKeyGen;
