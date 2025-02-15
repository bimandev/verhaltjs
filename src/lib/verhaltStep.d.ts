export type VerhaltStep = {
    form : VerhaltStepForm
    content : VerhaltStepContent

    isDynamic : VerhaltStepIsDynamic
    isNullable : VerhaltStepIsNullable
}

export type VerhaltStepForm = "name" | "index"

export type VerhaltStepContent = string

export type VerhaltStepIsDynamic = boolean

export type VerhaltStepIsNullable = boolean