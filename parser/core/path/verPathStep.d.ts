export interface IVerPathStep {
    type : VerPathStepType
    display : VerPathStepDisplay
    content : VerPathStepContent

    structure : VerPathStepStructure
    catching : VerPathStepCatching
    useRedirect : VerPathStepUseRedirect
}

export type VerPathStepType = VerPathStepObjectType | VerPathStepArrayType;

export type VerPathStepObjectType = "object";

export type VerPathStepArrayType = "array";

export type VerPathStepDisplay = string;

export type VerPathStepContent = VerPathStepObjectContent | VerPathStepArrayContent;

export type VerPathStepObjectContent = string;

export type VerPathStepArrayContent = number;

export type VerPathStepStructure = VerPathStepStaticStructure | VerPathStepVariableStructure;

export type VerPathStepStaticStructure = "static";

export type VerPathStepVariableStructure = "variable";

export type VerPathStepCatching = VerPathStepNativeCatching | VerPathStepOptionalCatching | VerPathStepStrictCatching;

export type VerPathStepNativeCatching = "native";

export type VerPathStepOptionalCatching = "optional";

export type VerPathStepStrictCatching = "strict";

export type VerPathStepUseRedirect = boolean;