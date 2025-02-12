import VerhaltModel from "./verhaltModel";
import { VerhaltPathError } from "./verhaltPath";

export type VerhaltValue = string | number | boolean | null | undefined | VerhaltModel | VerhaltPathError;

export default VerhaltValue;