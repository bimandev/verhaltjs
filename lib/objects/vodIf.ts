import VodObject from "../vodObject";
import VodBody from "../vodBody";
import VodElseIf, { VodElseIfType } from "./vodElseIf";
import VodElse, { VodElseType } from "./vodElse";

export type VodIf = [string, VodBody, VodIfOther?];

export default VodIf;

export type VodIfType = "if"; 

export type VodIfOther = VodObject<VodElseIfType, VodElseIf> | VodObject<VodElseType, VodElse>;