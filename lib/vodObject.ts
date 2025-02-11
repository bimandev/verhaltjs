import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType } from "./objects/vodIf";
import VodElseIf, { VodElseIfType } from "./objects/vodElseIf";
import VodElse, { VodElseType } from "./objects/vodElse";
import VodCondSingle, { VodCondSingleType } from "./objects/vodCondSingle";
import VodCondBinary, { VodCondBinaryType } from "./objects/vodCondBinary";

export type VodObject<TValue, TType extends VodObjectType, TContent extends VodObjectContent<TValue>> = {
    type : TType;
    content : TContent;
}

export default VodObject;

export type VodObjectType = 
    VodCondSingleType | VodCondBinaryType |
    VodDoType | 
    VodIfType | VodElseIfType | VodElseType;

export type VodObjectContent<TValue> = 
    VodCondSingle<TValue> | VodCondBinary<TValue> |
    VodDo<TValue> | 
    VodIf<TValue> | VodElseIf<TValue> | VodElse;