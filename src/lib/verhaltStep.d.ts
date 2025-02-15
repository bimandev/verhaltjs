export type VerhaltStep = {
    form : VerhaltStepForm
    content : VerhaltStepContent

    structure : VerhaltStepStructure
    behavior : VerhaltStepBehavior
}

export type VerhaltStepForm = "name" | "index"

export type VerhaltStepContent = string

export type VerhaltStepStructure = "static" | "variable"

export type VerhaltStepBehavior = "default" | "optional" | "strict"