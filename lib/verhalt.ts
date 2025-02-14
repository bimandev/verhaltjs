import { routePaths, pathKeys, keyContent, keyIndex } from "@verhalt/parser/lib"
import { VerhaltArrayModel, VerhaltModel, VerhaltObjectModel, VerhaltReference, VerhaltReferenceType, VerhaltStructureModel } from "@verhalt/types/lib";
import { pathError } from "./utils/error";

export class Verhalt {
    public static ref<TModel extends VerhaltObjectModel>(source : TModel, route : string, type : VerhaltReferenceType = "target") : VerhaltReference {
        if(route === undefined) {
            return [];
        }

        const paths = routePaths(route);

        for(const path of paths) {
            try {                
                return fromPath(path);
            }
            catch(error) {
                if(paths[paths.length - 1] === path) {
                    throw error;
                }

                continue;
            }
        }

        return [];

        function fromPath(path? : string) : VerhaltReference {
            if(path === undefined) {
                return [];
            }
    
            let current = source;
            const keys = pathKeys(path);
            const completedKeys = [];
            const completedRefs = [];
            const ref : VerhaltReference = [];
    
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];

                const [head, body] = keyContent(key);
                const [headNull, headName] = head ?? [false, undefined];
    
                if(headName) {
                    completedKeys.push(key);

                    if(typeof current !== "object") {
                        throw pathError(completedKeys, `Expected object, got ${typeof current}`);
                    }
    
                    if(Array.isArray(current)) {
                        throw pathError(completedKeys, `Expected object, got array`);
                    }
    
                    if(!(headName in (current as object))) {
                        throw pathError(completedKeys, `Expected key ${headName} in object`);
                    }
    
                    current = (current as VerhaltStructureModel)[headName];

                    if(type === "full") {
                        completedRefs.push(`${key[0]}${headName}`);
                        ref.push([completedRefs.join(""), current]);
                    }
                }
    
                if(body) {
                    for(const [contentNull, contentValue] of body) {
                        if(!Array.isArray(current)) {
                            throw pathError(completedKeys, `Expected array, got ${typeof current}`);
                        }
    
                        let index = keyIndex(contentValue);
    
                        if(index === null) {
                            throw pathError(completedKeys, `Expected index number, got ${typeof index}`);
                        }
    
                        if(typeof index === "string") {
                            
                            let value;
                            try {
                                //value = Verhalt.lookup(source, index);
                            }
                            catch(error) {
                                throw pathError(completedKeys, `Error during model lookup. \error:${error}`);
                            }
    
                            if(typeof value !== "number") {
                                throw pathError(completedKeys, `Expected number, got ${typeof value}`);
                            }
    
                            index = value;
                        }
    
                        current = (current as VerhaltArrayModel)[index];

                        if(type === "full") {
                            completedRefs.push(`[${contentValue}]`);
                            ref.push([completedRefs.join(""), current]);
                        }
                    }
                }
            }
            
            return ref;
        }
    }

    /*public static lookup<TModel extends VerhaltObjectModel>(source : TModel, route : string) : VerhaltModel {
        const ref = Verhalt.ref(source, route);
        if(ref) {
            if(Array.isArray(ref)) {
                return ref[]
            }
        }

        return undefined;
    }*/
}

export default Verhalt;