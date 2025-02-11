import VodObject from "./vodObject";
import VodBody from "./vodBody";
import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType,VodIfOther } from "./objects/vodIf";
import VodElse, { VodElseType } from "./objects/vodElse";
import VodElseIf, { VodElseIfType } from "./objects/vodElseIf";

export class Vod {

    public static do<TValue>(path : string, value : TValue, modus? : string) : VodObject<TValue, VodDoType, VodDo<TValue>> {
        return {
            type: "do",
            content: [path, value, modus] as VodDo<TValue>
        }
    }

    public static if<TValue>(path : string, modus : string, value : TValue, body : VodBody, other? : VodIfOther<TValue>) : VodObject<TValue, VodIfType, VodIf<TValue>> {
        return {
            type: "if",
            content: [path, modus, value, body, other] as VodIf<TValue>
        }
    }

    public static elseif<TValue>(path : string, modus : string, value : TValue, body : VodBody, other? : VodIfOther<TValue>) : VodObject<TValue, VodElseIfType, VodElseIf<TValue>> {
        return {
            type: "elseif",
            content: [path, modus, value, body, other] as VodElseIf<TValue>
        }
    }

    public static else(body : VodBody) : VodObject<unknown, VodElseType, VodElse> {
        return {
            type: "else",
            content: body as VodElse
        }
    }
}

export default Vod;