import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType } from "./objects/vodIf";
import VodElseIf, { VodElseIfType } from "./objects/vodElseIf";
import VodElse, { VodElseType } from "./objects/vodElse";

export type VodObject<TType extends VodObjectType, TContent extends VodObjectContent> = {
    type : TType;
    content : TContent;
}

export default VodObject;

export type VodObjectType = VodDoType | VodIfType | VodElseIfType | VodElseType;

export type VodObjectContent = VodDo | VodIf | VodElseIf | VodElse;