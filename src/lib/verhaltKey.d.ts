import { VerhaltStep } from "./verhaltStep";

export type VerhaltKey = {
    form : VerhaltKeyForm
    steps : VerhaltKeySteps
    catching : VerhaltKeyCatching
};

export type VerhaltKeyForm = VerhaltKeyRootForm | VerhaltKeyExtensionForm;

export type VerhaltKeyRootForm = "root";

export type VerhaltKeyExtensionForm = "extension";

export type VerhaltKeySteps = VerhaltStep[];

export type VerhaltKeyCatching = VerhaltKeyNativeCatching | VerhaltKeyToleratedCatching;

export type VerhaltKeyNativeCatching = "native";

export type VerhaltKeyToleratedCatching = "tolerated";