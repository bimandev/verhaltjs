import { VerhaltStep } from "./verhaltStep";

export type VerhaltKey = {
    steps : VerhaltStep[]
    catching : VerhaltKeyCatching
};

export type VerhaltKeyCatching = "native" | "tolerated";