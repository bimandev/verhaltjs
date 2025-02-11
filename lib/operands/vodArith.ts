import VodValue from "../vodValue";

export type VodArith = [VodValue, VodArithSymbol, VodValue];

export default VodArith;

export type VodArithSymbol = 
    VodArithAddSymbol | 
    VodArithSubSymbol | 
    VodArithMulSymbol | 
    VodArithDivSymbol | 
    VodArithModSymbol | 
    VodArithPowSymbol;

export type VodArithAddSymbol = "+";

export type VodArithSubSymbol = "-";

export type VodArithMulSymbol = "*";

export type VodArithDivSymbol = "/";

export type VodArithModSymbol = "%";

export type VodArithPowSymbol = "^";