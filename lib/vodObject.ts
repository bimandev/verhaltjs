import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType } from "./objects/vodIf";
import VodElseIf, { VodElseIfType } from "./objects/vodElseIf";
import VodElse, { VodElseType } from "./objects/vodElse";
import VodSet, { VodSetType } from "./objects/vodSet";

export type VodObject<TType extends VodObjectType, TContent extends VodObjectContent> = {
    type : TType;
    content : TContent;
}

export default VodObject;

export type VodObjectType = VodSetType | VodDoType | VodIfType | VodElseIfType | VodElseType;

export type VodObjectContent = VodSet | VodDo | VodIf | VodElseIf | VodElse;