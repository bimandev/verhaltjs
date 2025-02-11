import VodObject from "./vodObject";
import VodBody from "./vodBody";
import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType,VodIfOther } from "./objects/vodIf";
import VodElse, { VodElseType } from "./objects/vodElse";

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

    public static else<TValue>(path : string, modus : string, value : TValue, body : VodBody) : VodObject<TValue, VodElseType, VodElse<TValue>> {
        return {
            type: "else",
            content: [path, modus, value, body] as VodElse<TValue>
        }
    }
}

export default Vod;