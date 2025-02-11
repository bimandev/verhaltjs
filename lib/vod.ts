import { VodIf } from "./objects/vodIf";
import VodBody from "./vodBody";

export class Vod {

    public static if<TValue>(path : string, modus : string, value : TValue, body : VodBody) : VodIf<TValue> {
        return [path, modus, value, body] as VodIf<TValue> ;
    }
}

export default Vod;