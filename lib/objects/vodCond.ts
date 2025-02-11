import VodObject from "../vodObject";
import VodCondSingle, { VodCondSingleType } from "./vodCondSingle";
import VodCondBinary, { VodCondBinaryType } from "./vodCondBinary";

export type VodCond<TValue> = VodCondSingle<TValue> | VodCondBinary<TValue>;

export default VodCond;

export type VodCondType = VodCondSingleType | VodCondBinaryType;

export type VodCondObject<TValue> = VodObject<TValue, VodCondType, VodCond<TValue>>;
