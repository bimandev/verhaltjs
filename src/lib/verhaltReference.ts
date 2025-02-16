import { VerhaltReferenceFlag } from "./verhaltReference.d";
import { VerhaltObjectModel } from "./verhaltModel";
import { VerhaltStep } from "./verhaltStep";

export class VerhaltReference {
    private _step : VerhaltStep
    private _flag : VerhaltReferenceFlag
    private _obj : VerhaltObjectModel

    constructor(step : VerhaltStep, flag : VerhaltReferenceFlag, obj : VerhaltObjectModel) {
        this._step = step;
        this._flag = flag;
        this._obj = obj;
    }

    public get step() : VerhaltStep {
        return this._step;
    }

    public get obj() : VerhaltObjectModel {
        return this._obj;
    }
}