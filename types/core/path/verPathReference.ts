import { VerhaltReferenceFlag } from "./verhaltReference";
import { VerhaltObjectModel } from "../../verhaltModel";
import { VerPathStep } from "./verPathStep";

export class VerPathReference {
    private _step : VerPathStep
    private _flag : VerhaltReferenceFlag
    private _obj : VerhaltObjectModel

    constructor(step : VerPathStep, flag : VerhaltReferenceFlag, obj : VerhaltObjectModel) {
        this._step = step;
        this._flag = flag;
        this._obj = obj;
    }

    public get step() : VerPathStep {
        return this._step;
    }

    public get flag() : VerhaltReferenceFlag {
        return this._flag;
    }

    public get obj() : VerhaltObjectModel {
        return this._obj;
    }
}