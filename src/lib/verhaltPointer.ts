import { VerhaltReference } from "./verhaltReference";

export class VerhaltPointer {
    private _refs : VerhaltReference[];
    
    constructor(refs : VerhaltReference[]) {
        this._refs = refs;
    }
}