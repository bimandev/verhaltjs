import VodCond, { VodCondObject } from "./vodCond";

export type VodCondBinary<TValue> = [VodCondObject<TValue>, string, VodCondObject<TValue>];

export default VodCondBinary;

export type VodCondBinaryType = "condBinary";