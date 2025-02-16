import VodValue from "../vodValue";

export type VodComp = [VodValue, VodCompSymbol, VodValue];

export default VodComp;

export type VodCompSymbol = VodCompEqualSymbol | VodCompNotEqualSymbol | VodCompLessThanSymbol | VodCompLessThanEqualSymbol | VodCompGreaterThanSymbol | VodCompGreaterThanEqualSymbol;

export type VodCompEqualSymbol = "==";

export type VodCompNotEqualSymbol = "!=";

export type VodCompLessThanSymbol = "<";

export type VodCompLessThanEqualSymbol = "<=";

export type VodCompGreaterThanSymbol = ">";

export type VodCompGreaterThanEqualSymbol = ">=";