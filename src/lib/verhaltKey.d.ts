import { VerhaltStep } from "./verhaltStep";

export type VerhaltKey = {
    form : VerhaltForm
    steps : VerhaltKeySteps
    catching : VerhaltKeyCatching
};

export type VerhaltForm = VerhaltRootForm | VerhaltExtensionForm;

export type VerhaltRootForm = "root";

export type VerhaltExtensionForm = "extension";

export type VerhaltKeySteps = VerhaltStep[];

export type VerhaltKeyCatching = VerhaltKeyNativeCatching | VerhaltKeyToleratedCatching;

export type VerhaltKeyNativeCatching = "native";

export type VerhaltKeyToleratedCatching = "tolerated";