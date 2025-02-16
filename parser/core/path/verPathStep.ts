import { IVerPathStep, VerPathStepCatching, VerPathStepContent, VerPathStepDisplay, VerPathStepStructure, VerPathStepType } from './verPathStep.d';

export class VerPathStep implements IVerPathStep {
    private _type: VerPathStepType;
    private _display: VerPathStepDisplay;
    private _content: VerPathStepContent;
    private _structure: VerPathStepStructure;
    private _catching: VerPathStepCatching;
    private _useRedirect: boolean;

    constructor() {

    }

    public get type(): VerPathStepType {
        return this._type;
    }

    public get display(): VerPathStepDisplay {
        return this._display;
    }

    public get content(): VerPathStepContent {
        return this._content;
    }

    public get structure(): VerPathStepStructure {
        return this._structure;
    }

    public get catching(): VerPathStepCatching {
        return this._catching;
    }

    public get useRedirect(): boolean {
        return this._useRedirect;
    }
}