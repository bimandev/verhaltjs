import VodCond from "./vodCond";

export type VodCondBinary<TValue> = [VodCond<TValue>, string, VodCond<TValue>];

export default VodCondBinary;

export type VodCondBinaryType = "condBinary";