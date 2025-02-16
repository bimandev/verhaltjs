export type VerhaltLinkOptions = Readonly<{
    referenceHandling : VerhaltLinkReferenceHandlingOption
    includeAllKeys : VerhaltLinkIncludeKeysOption
    includeSteps : VerhaltLinkIncludeStepsOption 
}>;

export type VerhaltLinkReferenceHandlingOption = "default" | "source";

export type VerhaltLinkIncludeKeysOption = boolean;

export type VerhaltLinkIncludeStepsOption = boolean;