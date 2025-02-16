import { VerhaltStep } from "./verPathStep";
import { VerPathStep } from "./verPathStep";

export type VerPathKey = {
    form : VerPathKeyForm
    steps : VerPathKeySteps
    catching : VerPathKeyCatching
};

export type VerPathKeyForm = VerPathKeyRootForm | VerPathKeyExtensionForm;

export type VerPathKeyRootForm = "root";

export type VerPathKeyExtensionForm = "extension";

export type VerPathKeySteps = VerPathStep[];

export type VerPathKeyCatching = VerPathKeyNativeCatching | VerPathKeyToleratedCatching;

export type VerPathKeyNativeCatching = "native";

export type VerPathKeyToleratedCatching = "tolerated";