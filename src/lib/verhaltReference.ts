import { VerhaltObjectModel } from "./verhaltModel";

export type VerhaltReference = VerhaltReferenceEntry[]

export type VerhaltReferenceEntry = [string, VerhaltObjectModel]

export type VerhaltReferenceType = "target" | "parent" | "full";