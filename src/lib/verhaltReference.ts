import { VerhaltKey } from "./verhaltKey";
import { VerhaltObjectModel } from "./verhaltModel";
import { VerhaltStep } from "./verhaltStep";

export type VerhaltReference = {
    key : VerhaltKey
    step : VerhaltStep
    target : VerhaltObjectModel
}