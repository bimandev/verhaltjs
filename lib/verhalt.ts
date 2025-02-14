import { routePaths, pathKeys, keyContent, keyIndex } from "@verhalt/parser/lib"
import { VerhaltArrayModel, VerhaltModel, VerhaltObjectModel } from "@verhalt/types/lib";
import { pathError } from "./utils/error";

export class Verhalt {
    public static model<TModel extends VerhaltModel>(source : TModel, route? : string) : VerhaltModel {
        if(route === undefined) {
            return undefined;
        }

        const paths = routePaths(route);

        for(const path of paths) {
            try {                
                return Verhalt.modelFromPath(source, path);
            }
            catch(error) {
                if(paths[paths.length - 1] === path) {
                    throw error;
                }

                continue;
            }
        }
    }

    private static modelFromPath<TModel extends VerhaltModel>(source : TModel, path? : string) : VerhaltModel {
        if(path === undefined) {
            return undefined;
        }

        let current = source;
        const keys = pathKeys(path);
        const completedKeys = [];

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            completedKeys.push(key);

            const [head, body] = keyContent(key);
            const [headNull, headName] = head ?? [false, undefined];

            if(headName) {
                if(typeof current !== "object") {
                    throw pathError(completedKeys, `Expected object, got ${typeof current}`);
                }

                if(Array.isArray(current)) {
                    throw pathError(completedKeys, `Expected object, got array`);
                }

                if(!(headName in (current as object))) {
                    throw pathError(completedKeys, `Expected key ${headName} in object`);
                }

                current = (current as VerhaltObjectModel)[headName];
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
                            value = Verhalt.model(source, index);
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
                }
            }
        }

        return current;
    }
}

export default Verhalt;