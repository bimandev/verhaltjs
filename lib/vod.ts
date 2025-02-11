import VodObject from "./vodObject";
import VodBody from "./vodBody";
import VodCond from "./operands/vodCond";
import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType,VodIfOther } from "./objects/vodIf";
import VodElse, { VodElseType } from "./objects/vodElse";
import VodElseIf, { VodElseIfType } from "./objects/vodElseIf";

export class Vod {
    public static do<TValue>(path : string, value : TValue, modus? : string) : VodObject<VodDoType, VodDo> {
        return {
            type: "do",
            content: [path, value, modus] as VodDo
        }
    }

    public static if<TValue>(cond : VodCond, body : VodBody, other? : VodIfOther) : VodObject<VodIfType, VodIf> {
        return {
            type: "if",
            content: [cond, body, other] as VodIf
        }
    }

    public static elseif<TValue>(cond : VodCond, body : VodBody, other? : VodIfOther) : VodObject<VodElseIfType, VodElseIf> {
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