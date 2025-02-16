export type VerhaltLinkOptions = {
    referenceHandling : VerhaltLinkReferenceHandlingOption
    includeOrigin : VerhaltLinkIncludeOriginOption    
    includeAllKeys : VerhaltLinkIncludeKeysOption
    includeSteps : VerhaltLinkIncludeStepsOption 
}

export type VerhaltLinkReferenceHandlingOption = "default" | "source";

export type VerhaltLinkIncludeOriginOption = boolean;

export type VerhaltLinkIncludeKeysOption = boolean;

export type VerhaltLinkIncludeStepsOption = boolean;