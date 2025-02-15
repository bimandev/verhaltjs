import { VerhaltObjectModel } from "./verhaltModel";

export type VerhaltReference = {
    target : VerhaltReferenceTarget
}

export type VerhaltReferenceTarget = {
    key : string
    obj : VerhaltObjectModel
}

export type VerhaltReferenceMatch = "target" | "parent" | "list" | "list+" | "source";