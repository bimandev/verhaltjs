import { VerhaltKey } from "./verhaltKey";
import { VerhaltReference } from "./verhaltReference";

export class VerhaltPointer {
    private _key : VerhaltKey;
    private _refs : VerhaltReference[];
    
    constructor(key : VerhaltKey, refs : VerhaltReference[]) {
        this._key = key;
        this._refs = refs;
    }

    public get key() : VerhaltKey {
        return this._key;
    }

    public get refs() : ReadonlyArray<VerhaltReference> {
        return this._refs;
    }
}