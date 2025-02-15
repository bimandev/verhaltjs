import { VerhaltStep } from "./verhaltStep";

export type VerhaltKey = {
    head : VerhaltKeyHead
    body: VerhaltKeyBody 
};
export type VerhaltKeyHead = { 
    silent : boolean
};

export type VerhaltKeyBody = { 
    steps : VerhaltStep[]
};