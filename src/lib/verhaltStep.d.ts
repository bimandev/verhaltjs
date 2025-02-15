export type VerhaltStep = {
    form : VerhaltStepForm
    display : VerhaltStepDisplay
    content : VerhaltStepContent

    structure : VerhaltStepStructure
    behaviour : VerhaltStepBehaviour
}

export type VerhaltStepForm = "name" | "index"

export type VerhaltStepDisplay = string

export type VerhaltStepContent = string | number

export type VerhaltStepStructure = VerhaltStepStaticStructure | VerhaltStepVariableStructure

export type VerhaltStepStaticStructure = "static";

export type VerhaltStepVariableStructure = "variable";

export type VerhaltStepBehaviour = VerhaltStepDefaultBehaviour | VerhaltStepOptionalBehaviour | VerhaltStepStrictBehaviour

export type VerhaltStepDefaultBehaviour = "default";

export type VerhaltStepOptionalBehaviour = "optional";

export type VerhaltStepStrictBehaviour = "strict";