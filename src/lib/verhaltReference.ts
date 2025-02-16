import { VerhaltObjectModel } from "./verhaltModel";
import { VerhaltStep } from "./verhaltStep";

export class VerhaltReference {
    private _step : VerhaltStep
    private _obj : VerhaltObjectModel

    constructor(step : VerhaltStep, obj : VerhaltObjectModel) {
        this._step = step;
        this._obj = obj;
    }

    public get step() : VerhaltStep {
        return this._step;
    }

    public get obj() : VerhaltObjectModel {
        return this._obj;
    }
}