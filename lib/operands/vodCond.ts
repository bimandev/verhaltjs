import VodCondSingle from "./vodCondSingle";
import VodCondBinary from "./vodCondBinary";

export type VodCond<TValue> = VodCondSingle<TValue> | VodCondBinary<TValue>;

export default VodCond;
