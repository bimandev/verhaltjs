import VodBody from "../vodBody";
import VodElseIf from "./vodElseIf";

export type VodIf<TValue> = [string, string, TValue, VodBody, VodIfContinue<TValue>?];

export default VodIf;

export type VodIfContinue<TValue> = VodElseIf<TValue>;