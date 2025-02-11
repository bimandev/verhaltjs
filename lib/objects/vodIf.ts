import VodBody from "../vodBody";
import VodElse from "./vodElse";
import VodElseIf from "./vodElseIf";

export type VodIf<TValue> = [string, string, TValue, VodBody, VodIfContinue<TValue>?];

export default VodIf;

export type VodIfContinue<TValue> = VodElseIf<TValue> | VodElse<TValue>;