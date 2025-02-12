import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType } from "./objects/vodIf";
import VodSet, { VodSetType } from "./objects/vodSet";
import VodObject from "./vodObject";

export type VodBody = VodObject<VodBodyObjectType, VodBodyObjectContent>[];

export default VodBody;

export type VodBodyObjectType = VodSetType | VodDoType | VodIfType;

export type VodBodyObjectContent = VodSet | VodDo | VodIf