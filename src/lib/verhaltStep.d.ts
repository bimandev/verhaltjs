export type VerhaltStep = {
    form : VerhaltStepForm
    content : VerhaltStepContent

    isDynamic : VerhaltStepIsDynamic
    behavior : VerhaltStepBehavior
}

export type VerhaltStepForm = "name" | "index"

export type VerhaltStepContent = string

export type VerhaltStepIsDynamic = boolean

export type VerhaltStepBehavior = "default" | "optional" | "strict"