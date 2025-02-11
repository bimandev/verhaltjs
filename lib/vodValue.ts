import VodArith from "./operands/vodArith.ts";

export type VodValue = null | boolean | number | string | object | VodArith;

export default VodValue;