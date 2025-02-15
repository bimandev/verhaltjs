import { VerhaltStep } from "./verhaltStep";

export type VerhaltKey = {
    steps : VerhaltKeySteps
    catching : VerhaltKeyCatching
};

export type VerhaltKeySteps = VerhaltStep[];

export type VerhaltKeyCatching = VerhaltKeyNativeCatching | VerhaltKeyToleratedCatching;

export type VerhaltKeyNativeCatching = "native";

export type VerhaltKeyToleratedCatching = "tolerated";