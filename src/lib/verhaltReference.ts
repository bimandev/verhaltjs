import { VerhaltObjectModel } from "./verhaltModel";

export type VerhaltReference = [VerhaltReferenceValue, VerhaltObjectModel]

export type VerhaltReferenceValue = string | number;

export type VerhaltReferenceMatch = "target" | "parent" | "list" | "list+" | "source";