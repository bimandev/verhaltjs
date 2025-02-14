import { VerhaltObjectModel } from "./verhaltModel";

export type VerhaltReference = VerhaltReferenceEntry[]

export type VerhaltReferenceEntry = [VerhaltReferenceEntryValue, VerhaltObjectModel];

export type VerhaltReferenceEntryValue = string | number;

export type VerhaltReferenceMatch = "target" | "parent" | "list" | "list+" | "source";