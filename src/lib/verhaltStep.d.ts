export type VerhaltStep = {
    form : VerhaltStepForm
    display : VerhaltStepDisplay,
    value : VerhaltStepValue
}

export type VerhaltStepForm = "name" | "index"

export type VerhaltStepDisplay = string

export type VerhaltStepValue = string | number