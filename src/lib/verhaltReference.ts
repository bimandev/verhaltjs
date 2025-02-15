import { VerhaltObjectModel } from "./verhaltModel";

export type VerhaltReference = {
    target : VerhaltReferenceItem
    source : VerhaltReferenceItem[]
}

export type VerhaltReferenceItem = {
    key : string
    obj : VerhaltObjectModel
}

export type VerhaltReferenceMatch = "target" | "parent" | "source";