export type VerhaltStep = {
    form : VerhaltStepForm
    content : VerhaltStepContent

    structure : VerhaltStepStructure
    behaviour : VerhaltStepBehaviour
}

export type VerhaltStepForm = "name" | "index"

export type VerhaltStepContent = string

export type VerhaltStepStructure = "static" | "variable"

export type VerhaltStepBehaviour = "default" | "optional" | "strict"