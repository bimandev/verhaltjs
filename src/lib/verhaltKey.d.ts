import { VerhaltStep } from "./verhaltStep";

export type VerhaltKey = {
    steps : VerhaltStep[]
    catching : VerhaltKeyCatching
};

export type VerhaltKeyCatching = VerhaltKeyNativeCatching | VerhaltKeyToleratedCatching;

export type VerhaltKeyNativeCatching = "native";

export type VerhaltKeyToleratedCatching = "tolerated";