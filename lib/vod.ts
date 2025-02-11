import VodBody from "./vodBody";
import VodDo from "./objects/vodDo";
import VodIf from "./objects/vodIf";

export class Vod {

    public static do<TValue>(path : string, value : TValue, modus? : string) : VodDo<TValue> {
        return [path, value, modus] as VodDo<TValue> ;
    }

    public static if<TValue>(path : string, modus : string, value : TValue, body : VodBody) : VodIf<TValue> {
        return [path, modus, value, body] as VodIf<TValue> ;
    }
}

export default Vod;