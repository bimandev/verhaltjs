import VodDo from "./objects/vodDo";
import VodIf from "./objects/vodIf";

export type VodObject<TValue> = {
    type : VodObjectType;
    content : VodObjectContent<TValue>;
}

export default VodObject;

export type VodObjectType = "do" | "if" | "elseif" | "else";

export type VodObjectContent<TValue> = VodDo<TValue> | VodIf<TValue>;