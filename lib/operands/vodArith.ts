import VodValue, { VodValueArith, VodValueNumber, VodValueString } from "../vodValue";

export type VodArith = [VodArithValue, VodArithSymbol, VodArithValue];

export default VodArith;

export type VodArithValue = VodValueNumber | VodValueString | VodValueArith;

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