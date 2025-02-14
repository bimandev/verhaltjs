import { parseRoutePaths, parsePathKeys, parseKey, parseKeyIndex } from "@verhalt/parser/lib"
import { VerhaltArrayModel, VerhaltKey, VerhaltModel, VerhaltObjectModel, VerhaltReference, VerhaltReferenceMatch, VerhaltStructureModel } from "@verhalt/types/lib";
import { pathError } from "./utils/error";

export class verhalt {
    public static ref<TModel extends VerhaltObjectModel>(model : TModel, route : string, match : VerhaltReferenceMatch = "target") : VerhaltReference[] {
        if(route === undefined) {
            return [];
        }

        const matchListPlus = match === "list+";
        const matchList = matchListPlus || match === "list";
        const matchSource = !matchList && match === "source";

        const paths = parseRoutePaths(route);

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

        function fromPath(path? : string) : VerhaltReference[] {
            if(path === undefined) {
                return [];
            }
    
            let current = model;
            let source : VerhaltReference | undefined = undefined;

            const keys = parsePathKeys(path);
            const completedKeys : string[]= [];
            const completedRefs : string[]= [];
            const ref : VerhaltReference[] = [];

            if(matchListPlus) {
                ref.push({ flag: "current", target: model });
            }
    
            while(keys.length > 0) {
                const key = keys.shift() as string;
                completedKeys.push(key);

                const {head, body} = parseKey(key) as VerhaltKey;
    
                if(body.name) {
                    const nameValue = body.name.value;
                    completedRefs.push(`${key[0]}${nameValue}`);

                    if(typeof current !== "object") {
                        throw pathError(completedRefs, `Expected object, got ${typeof current}`);
                    }
    
                    if(Array.isArray(current)) {
                        throw pathError(completedRefs, `Expected object, got array`);
                    }
    
                    if(!(nameValue in (current as object))) {
                        throw pathError(completedRefs, `Expected key ${nameValue} in object`);
                    }
    
                    if(matchSource) {
                        source = { flag: nameValue, target: current};
                    }

                    current = (current as VerhaltStructureModel)[nameValue];

                    if(matchList) {
                        ref.push({ flag: completedRefs.join(""), target: current});
                    }
                }
    
                if(body.indexes) {
                    const indexes = body.indexes;
                    for(let b = 0; b < indexes.length; b++) {
                        const { value, nullable, dynamic} = indexes[b];
                        completedRefs.push(`[${value}]`);

                        if(!Array.isArray(current)) {
                            throw pathError(completedRefs, `Expected array, got ${typeof current}`);
                        }
    
                        let index = parseKeyIndex(value as string); // ! change value as string later
    
                        if(index === null) {
                            throw pathError(completedRefs, `Expected index number, got ${typeof index}`);
                        }
    
                        if(typeof index === "string") {
                            
                            let value;
                            try {
                                value = verhalt.lookup(model, index);
                            }
                            catch(error) {
                                throw pathError(completedRefs, `Error during model lookup. \error:${error}`);
                            }
    
                            if(typeof value !== "number") {
                                throw pathError(completedRefs, `Expected number, got ${typeof value}`);
                            }
    
                            index = value;
                        }

                        if(matchSource) {
                            source = { flag:index, target:current};
                        }

                        current = (current as VerhaltArrayModel)[index];

                        if(matchList) {
                            ref.push({ flag:completedRefs.join(""), target:current});
                        }
                    }
                }
            }

            if(!matchList) {
                switch(match) {
                    case "target":
                        ref.push({ flag: completedKeys.join(""), target: current});
                        break;
                    case "source":
                        ref.push(source as VerhaltReference);
                        break;
                }
            }

            return ref;
        }
    }

    public static lookup<TModel extends VerhaltObjectModel>(model : TModel, route : string) : VerhaltModel {
        const { flag, target} : VerhaltReference= verhalt.ref(model, route, "source")[0] as VerhaltReference; // ! also check as modifiable

        if(target) {    // ! check if variable
            if(Array.isArray(target)) {
                return target[flag as number];
            }

            return target[flag as string];
        }

        return undefined;
    }

    public static assign<TModel extends VerhaltObjectModel>(model : TModel, route : string, content : VerhaltModel) : boolean {
        const { flag, target} : VerhaltReference = verhalt.ref(model, route, "source")[0] as VerhaltReference // ! also check as modifiable

        if(target) {
            if(Array.isArray(target)) {
                target[flag as number] = content;
            }
            else {
                target[flag as string] = content;
            }
            return true
        }

        return false;
    }
}

export default verhalt;