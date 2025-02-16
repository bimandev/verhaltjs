export type VerhaltStep = {
    form : VerhaltStepForm
    display : VerhaltStepDisplay
    content : VerhaltStepContent

    structure : VerhaltStepStructure
    catching : VerhaltStepCatching
    useRedirect : VerhaltStepUseRedirect
}

export type VerhaltStepForm = VerhaltStepNameForm | VerhaltStepIndexForm;

export type VerhaltStepNameForm = "name";

export type VerhaltStepIndexForm = "index";

export type VerhaltStepDisplay = string;

export type VerhaltStepContent = VerhaltStepNameContent | VerhaltStepIndexContent;

export type VerhaltStepNameContent = string;

export type VerhaltStepIndexContent = number;

export type VerhaltStepStructure = VerhaltStepStaticStructure | VerhaltStepVariableStructure;

export type VerhaltStepStaticStructure = "static";

export type VerhaltStepVariableStructure = "variable";

export type VerhaltStepCatching = VerhaltStepNativeCatching | VerhaltStepOptionalCatching | VerhaltStepStrictCatching;

export type VerhaltStepNativeCatching = "native";

export type VerhaltStepOptionalCatching = "optional";

export type VerhaltStepStrictCatching = "strict";

export type VerhaltStepUseRedirect = boolean;