export type VerhaltLinkOptions = {
    handle : VerhaltLinkHandleOption
    origin : VerhaltLinkOriginOption    
    keys : VerhaltLinkKeysOption
    steps : VerhaltLinkStepsOption 
}

export type VerhaltLinkHandleOption = "default" | "source";

export type VerhaltLinkOriginOption = boolean;

export type VerhaltLinkKeysOption = boolean;

export type VerhaltLinkStepsOption = boolean;