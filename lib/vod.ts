import VodObject from "./vodObject";
import VodBody from "./vodBody";
import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType,VodIfOther } from "./objects/vodIf";
import VodElse, { VodElseType } from "./objects/vodElse";
import VodElseIf, { VodElseIfType } from "./objects/vodElseIf";
import VodCond from "./operands/vodCond";
import VodArith, { VodArithAddSymbol, VodArithDivSymbol, VodArithModSymbol, VodArithMulSymbol, VodArithSubSymbol, VodArithSymbol } from "./operands/vodArith";
import VodValue from "./vodValue";

export class Vod {
    public static do<TValue>(path : string, value : TValue, modus? : string) : VodObject<TValue, VodDoType, VodDo<TValue>> {
        return {
            type: "do",
            content: [path, value, modus] as VodDo<TValue>
        }
    }

    public static if<TValue>(cond : VodCond, body : VodBody, other? : VodIfOther<TValue>) : VodObject<TValue, VodIfType, VodIf<TValue>> {
        return {
            type: "if",
            content: [cond, body, other] as VodIf<TValue>
        }
    }

    public static elseif<TValue>(cond : VodCond, body : VodBody, other? : VodIfOther<TValue>) : VodObject<TValue, VodElseIfType, VodElseIf<TValue>> {
        return {
            type: "elseif",
            content: [cond, body, other] as VodElseIf<TValue>
        }
    }

    public static else(body : VodBody) : VodObject<unknown, VodElseType, VodElse> {
        return {
            type: "else",
            content: body as VodElse
        }
    }

    //

    public static arith(value1 : VodValue, symbol : VodArithSymbol, value2 : VodValue) : VodArith {
        return [value1, symbol, value2] as VodArith;
    }

    public static and = "&&";

    public static or = "||";

    public static eq = "==";

    public static neq = "!=";

    public static gt = ">";

    public static gte = ">=";

    public static lt = "<";

    public static lte = "<=";

    public static not = "!";

    public static add : VodArithAddSymbol = "+";

    public static sub : VodArithSubSymbol = "-";

    public static mul : VodArithMulSymbol = "*";

    public static div : VodArithDivSymbol = "/";

    public static mod : VodArithModSymbol = "%";
}

export default Vod;