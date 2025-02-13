import { routePaths, pathKeys, keyContent, keyIndex } from "@verhalt/parser/lib"
import { VerhaltArrayModel, VerhaltModel, VerhaltObjectModel } from "@verhalt/types/lib";

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

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];

            const [head, body] = keyContent(key);
            const [headNull, headName] = head ?? [false, undefined];

            if(headName) {
                if(typeof current !== "object") {
                    throw new Error(`Expected object, got ${typeof current}`);
                }

                if(Array.isArray(current)) {
                    throw new Error(`Expected object, got array`);
                }

                if(!(headName in (current as object))) {
                    throw new Error(`Expected key ${headName} in object`);
                }

                current = (current as VerhaltObjectModel)[headName];
            }

            if(body) {
                for(const [contentNull, contentValue] of body) {
                    if(!Array.isArray(current)) {
                        throw new Error(`Expected array, got ${typeof current}`);
                    }

                    current = (current as VerhaltArrayModel)[keyIndex(contentValue)];
                }
            }
        }

        return current;
    }
}

export default Verhalt;