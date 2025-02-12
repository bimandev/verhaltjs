import VodArith from "./operands/vodArith.ts";

export type VodValue = VodValueNull | VodValueBoolean | VodValueNumber | VodValueString | VodValueArith | VodValueObject;

export default VodValue;

export type VodValueNull = null;

export type VodValueBoolean = boolean;

export type VodValueNumber = number;

export type VodValueString = string;

export type VodValueArith = VodArith;

export type VodValueObject = { [key: string]: any };