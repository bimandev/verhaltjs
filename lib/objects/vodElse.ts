import VodBody from "../vodBody";

export type VodElse<TValue> = [string, string, TValue, VodBody];

export default VodElse;

export type VodElseType = "else";