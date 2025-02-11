import VodDo, { VodDoType } from "./objects/vodDo";
import VodIf, { VodIfType } from "./objects/vodIf";
import VodObject from "./vodObject";

export type VodBody = VodObject<VodBodyObjectType, VodBodyObjectContent>[];

export default VodBody;

export type VodBodyObjectType = VodDoType | VodIfType;

export type VodBodyObjectContent = VodDo | VodIf