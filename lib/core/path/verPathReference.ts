import { VerPathReferenceFlag } from "./verPathReference.d";
import { VerhaltObjectModel } from "../../verhaltModel";
import { VerPathStep } from "./verPathStep";

export class VerPathReference {
    private _step : VerPathStep
    private _flag : VerPathReferenceFlag
    private _obj : VerhaltObjectModel

    constructor(step : VerPathStep, flag : VerPathReferenceFlag, obj : VerhaltObjectModel) {
        this._step = step;
        this._flag = flag;
        this._obj = obj;
    }

    public get step() : VerPathStep {
        return this._step;
    }

    public get flag() : VerPathReferenceFlag {
        return this._flag;
    }

    public get obj() : VerhaltObjectModel {
        return this._obj;
    }
}