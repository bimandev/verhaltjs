export type VerPathLinkOptions = Readonly<{
    referenceHandling? : VerhaltLinkReferenceHandlingOption
    onlyLastKey? : VerhaltLinkOnlyLastKeyOption
    onlyLastStep? : VerhaltLinkOnlyLastStepOption
}>;

export type VerhaltLinkReferenceHandlingOption = "default" | "source";

export type VerhaltLinkOnlyLastKeyOption = boolean;

export type VerhaltLinkOnlyLastStepOption = boolean;