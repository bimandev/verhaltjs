import VodDo from "./objects/vodDo";
import VodIf from "./objects/vodIf";

export type VodObject<TValue, TContent extends VodObjectContent<TValue>> = {
    type : VodObjectType;
    content : TContent;
}

export default VodObject;

export type VodObjectType = "do" | "if" | "elseif" | "else";

export type VodObjectContent<TValue> = VodDo<TValue> | VodIf<TValue>;