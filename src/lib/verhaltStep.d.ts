export type VerhaltStep = {
    form : VerhaltStepForm
    display : string,
    value : string | number
}

export type VerhaltStepForm = "name" | "index"