import { VerPathKey } from "./verPathKey";
import { VerPathReference } from "./verPathReference";

export class VerhaltPointer {
    private _key : VerPathKey;
    private _refs : VerPathReference[];
    
    constructor(key : VerPathKey, refs : VerPathReference[]) {
        this._key = key;
        this._refs = refs;
    }

    public get key() : VerPathKey {
        return this._key;
    }

    public get refs() : ReadonlyArray<VerPathReference> {
        return this._refs;
    }
}