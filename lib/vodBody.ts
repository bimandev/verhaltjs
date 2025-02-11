import VodDo from "./objects/vodDo";
import VodIf from "./objects/vodIf";
import VodObject from "./vodObject";

export type VodBody = VodObject<any, any, VodBodyContent>[];

export default VodBody;

export type VodBodyContent = VodDo<any> | VodIf<any>