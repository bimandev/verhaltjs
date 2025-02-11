import VodObject from "../vodObject";
import VodBody from "../vodBody";
import VodElse from "./vodElse";
import VodElseIf from "./vodElseIf";

export type VodIf<TValue> = [string, string, TValue, VodBody, VodIfOther<TValue>?];

export default VodIf;

export type VodIfOther<TValue> = VodObject<TValue, VodElseIf<TValue>> | VodObject<TValue, VodElse<TValue>>;