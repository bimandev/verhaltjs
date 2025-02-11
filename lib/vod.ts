import VodObject from "./vodObject";
import VodBody from "./vodBody";
import VodDo from "./objects/vodDo";
import VodIf from "./objects/vodIf";

export class Vod {

    public static do<TValue>(path : string, value : TValue, modus? : string) : VodObject<TValue> {
        return {
            type: "do",
            content: [path, value, modus] as VodDo<TValue>
        }
    }

    public static if<TValue>(path : string, modus : string, value : TValue, body : VodBody) : VodObject<TValue> {
        return {
            type: "if",
            content: [path, modus, value, body] as VodIf<TValue>
        }
    }
}

export default Vod;