import VodObject from "./vodObject";
import VodBody from "./vodBody";
import VodCond from "./operands/vodCond";
import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType,VodIfOther } from "./objects/vodIf";
import VodElse, { VodElseType } from "./objects/vodElse";
import VodElseIf, { VodElseIfType } from "./objects/vodElseIf";
import VodValue from "./vodValue";
import VodKey from "./vodKey";
import VodSet, { VodSetType } from "./objects/vodSet";

export class Vod {
    public static set(key : VodKey, value : VodValue) : VodObject<VodSetType, VodSet> {
        return {
            type: "set",
            content: [key, value] as VodSet
        }
    }

    public static do(key : VodKey, symbol : string, value : VodValue) : VodObject<VodDoType, VodDo> {
        return {
            type: "do",
            content: [key, symbol, value] as VodDo
        }
    }

    public static if(cond : VodCond, body : VodBody, other? : VodIfOther) : VodObject<VodIfType, VodIf> {
        return {
            type: "if",
            content: [cond, body, other] as VodIf
        }
    }

    public static elseif(cond : VodCond, body : VodBody, other? : VodIfOther) : VodObject<VodElseIfType, VodElseIf> {
        return {
            type: "elseif",
            content: [cond, body, other] as VodElseIf
        }
    }

    public static else(body : VodBody) : VodObject<VodElseType, VodElse> {
        return {
            type: "else",
            content: body as VodElse
        }
    }
}

export default Vod;