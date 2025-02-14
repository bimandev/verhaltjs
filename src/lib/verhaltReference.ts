import { VerhaltObjectModel } from "./verhaltModel";

export type VerhaltReference = {
    flag : string | number,
    target : VerhaltObjectModel,
}

export type VerhaltReferenceMatch = "target" | "parent" | "list" | "list+" | "source";