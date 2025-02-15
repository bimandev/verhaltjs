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

export type VerhaltStepStructure = "static" | "variable"

export type VerhaltStepBehaviour = "default" | "optional" | "strict"