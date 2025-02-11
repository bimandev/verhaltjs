import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType } from "./objects/vodIf";
import VodElseIf, { VodElseIfType } from "./objects/vodElseIf";
import VodElse, { VodElseType } from "./objects/vodElse";

export type VodObject<TValue, TType extends VodObjectType, TContent extends VodObjectContent<TValue>> = {
    type : TType;
    content : TContent;
}

export default VodObject;

export type VodObjectType = VodDoType | VodIfType | VodElseIfType | VodElseType;

export type VodObjectContent<TValue> = VodDo<TValue> | VodIf<TValue> | VodElseIf<TValue> | VodElse<TValue>;