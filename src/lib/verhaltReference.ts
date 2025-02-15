import { VerhaltObjectModel } from "./verhaltModel";

export type VerhaltReference = {
    target : VerhaltReferenceItem
    source : VerhaltReferenceItem[]
}

export type VerhaltReferenceItem = {
    key : string
    step : VerhaltReferenceStep
    obj : VerhaltObjectModel
}


export type VerhaltReferenceStep = {
    display : string
    value : string | number
}

export type VerhaltReferenceMatch = "target" | "parent" | "source" | "origin";