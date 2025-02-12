import VodKey from "./vodKey";
import VodArith from "./operands/vodArith";

export type VodValue = VodValueNull | VodValueBoolean | VodValueNumber | VodValueString | VodValueKey | VodValueArith | VodValueObject;

export default VodValue;

export type VodValueNull = null;

export type VodValueBoolean = boolean;

export type VodValueNumber = number;

export type VodValueString = string;

export type VodValueKey = VodKey;

export type VodValueArith = VodArith;

export type VodValueObject = { [key: string]: any };