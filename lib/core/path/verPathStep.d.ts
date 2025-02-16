export type VerPathStep = {
    form : VerPathStepForm
    display : VerPathStepDisplay
    content : VerPathStepContent

    structure : VerPathStepStructure
    catching : VerPathStepCatching
    useRedirect : VerPathStepUseRedirect
}

export type VerPathStepForm = VerPathStepNameForm | VerPathStepIndexForm;

export type VerPathStepNameForm = "name";

export type VerPathStepIndexForm = "index";

export type VerPathStepDisplay = string;

export type VerPathStepContent = VerPathStepNameContent | VerPathStepIndexContent;

export type VerPathStepNameContent = string;

export type VerPathStepIndexContent = number;

export type VerPathStepStructure = VerPathStepStaticStructure | VerPathStepVariableStructure;

export type VerPathStepStaticStructure = "static";

export type VerPathStepVariableStructure = "variable";

export type VerPathStepCatching = VerPathStepNativeCatching | VerPathStepOptionalCatching | VerPathStepStrictCatching;

export type VerPathStepNativeCatching = "native";

export type VerPathStepOptionalCatching = "optional";

export type VerPathStepStrictCatching = "strict";

export type VerPathStepUseRedirect = boolean;