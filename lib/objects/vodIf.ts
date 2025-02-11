import VodObject from "../vodObject";
import VodBody from "../vodBody";
import VodElseIf, { VodElseIfType } from "./vodElseIf";
import VodElse, { VodElseType } from "./vodElse";
import VodCond from "../operands/vodCond";

export type VodIf<TValue> = [VodCond, VodBody, VodIfOther<TValue>?];

export default VodIf;

export type VodIfType = "if"; 

export type VodIfOther<TValue> = VodObject<TValue, VodElseIfType, VodElseIf<TValue>> | VodObject<TValue, VodElseType, VodElse>;