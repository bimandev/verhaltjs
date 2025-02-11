import VodObject from "../vodObject";
import VodBody from "../vodBody";
import VodElseIf, { VodElseIfType } from "./vodElseIf";
import VodElse, { VodElseType } from "./vodElse";
import { VodCondObject } from "./vodCond";

export type VodIf<TValue> = [VodIfCond<TValue>, VodBody, VodIfOther<TValue>?];

export default VodIf;

export type VodIfType = "if"; 

export type VodIfCond<TValue> = VodCondObject<TValue>;

export type VodIfOther<TValue> = VodObject<TValue, VodElseIfType, VodElseIf<TValue>> | VodObject<TValue, VodElseType, VodElse>;