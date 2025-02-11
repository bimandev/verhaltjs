import VodObject from "./vodObject";
import VodBody from "./vodBody";
import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType,VodIfOther } from "./objects/vodIf";
import VodElse, { VodElseType } from "./objects/vodElse";
import VodElseIf, { VodElseIfType } from "./objects/vodElseIf";
import VodCondSingle, { VodCondSingleType } from "./objects/vodCondSingle";
import VodCondBinary, { VodCondBinaryType } from "./objects/vodCondBinary";
import { VodCondObject } from "./objects/vodCond";

export class Vod {

    public static cs<TValue>(path : string, modus : string, value : TValue) : VodObject<TValue, VodCondSingleType, VodCondSingle<TValue>> {
        return {
            type: "condSingle",
            content: [path, modus, value] as VodCondSingle<TValue>
        }
    }

    public static cb<TValue>(c1 : VodCondObject<TValue>, modus : string, c2 : VodCondObject<TValue>) : VodObject<TValue, VodCondBinaryType, VodCondBinary<TValue>> {
        return {
            type: "condBinary",
            content: [c1, modus, c2] as VodCondBinary<TValue>
        }
    }

    public static do<TValue>(path : string, value : TValue, modus? : string) : VodObject<TValue, VodDoType, VodDo<TValue>> {
        return {
            type: "do",
            content: [path, value, modus] as VodDo<TValue>
        }
    }

    public static if<TValue>(path : string, modus : string, value : TValue, body : VodBody, other? : VodIfOther<TValue>) : VodObject<TValue, VodIfType, VodIf<TValue>> {
        return {
            type: "if",
            content: [Vod.cs(path, modus, value), body, other] as VodIf<TValue>
        }
    }

    public static elseif<TValue>(path : string, modus : string, value : TValue, body : VodBody, other? : VodIfOther<TValue>) : VodObject<TValue, VodElseIfType, VodElseIf<TValue>> {
        return {
            type: "elseif",
            content: [Vod.cs(path, modus, value), body, other] as VodElseIf<TValue>
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