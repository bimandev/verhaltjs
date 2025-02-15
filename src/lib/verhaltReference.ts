import { VerhaltObjectModel } from "./verhaltModel";

export type VerhaltReference = {
    key : string
    target : VerhaltObjectModel
}

export type VerhaltReferenceMatch = "target" | "parent" | "list" | "list+" | "source";