import VodValue from "./vodValue";
import VodCond from "./operands/vodCond";
import VodArith, { VodArithAddSymbol, VodArithSubSymbol, VodArithMulSymbol, VodArithDivSymbol, VodArithModSymbol, VodArithSymbol } from "./operands/vodArith";
import VodComp, { VodCompEqualSymbol, VodCompNotEqualSymbol, VodCompGreaterThanSymbol, VodCompGreaterThanEqualSymbol, VodCompLessThanSymbol, VodCompLessThanEqualSymbol, VodCompSymbol } from "./operands/vodComp";
import VodLogic, { VodLogicAndSymbol, VodLogicOrSymbol, VodLogicSymbol } from "./operands/vodLogic";

export class VodOp {

    public static and : VodLogicAndSymbol = "&&";

    public static or : VodLogicOrSymbol = "||";


    public static eq : VodCompEqualSymbol = "==";

    public static neq : VodCompNotEqualSymbol = "!=";

    public static gt : VodCompGreaterThanSymbol = ">";

    public static gte : VodCompGreaterThanEqualSymbol = ">=";

    public static lt : VodCompLessThanSymbol = "<";

    public static lte : VodCompLessThanEqualSymbol = "<=";

    
    public static add : VodArithAddSymbol = "+";

    public static sub : VodArithSubSymbol = "-";

    public static mul : VodArithMulSymbol = "*";

    public static div : VodArithDivSymbol = "/";

    public static mod : VodArithModSymbol = "%";

    //

    public static arith(value1 : VodValue, symbol : VodArithSymbol, value2 : VodValue) : VodArith {
        return [value1, symbol, value2] as VodArith;
    }

    public static comp(value1 : VodValue, symbol : VodCompSymbol, value2 : VodValue) : VodComp {
        return [value1, symbol, value2] as VodComp;
    }

    public static logic(cond1 : VodCond, symbol : VodLogicSymbol, cond2 : VodCond) : VodLogic {
        return [cond1, symbol, cond2] as VodLogic;
    }
}

export default VodOp;