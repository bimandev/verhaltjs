import { routePaths, pathKeys, keyContent } from "@verhalt/parser/lib"
import { VerhaltModel } from "@verhalt/types/lib";

export class Verhalt {
    public static value(root : VerhaltModel, route? : string) : VerhaltModel {
        if(route === undefined) {
            return undefined;
        }

        const paths = routePaths(route);

        for(const path of paths) {
            try {                
                Verhalt.valueFromWay(path);
            }
            catch(error) {
                if(paths[paths.length - 1] === path) {
                    throw error;
                }

                continue;
            }
        }
    }

    private static valueFromWay(path? : string) : any {
        if(path === undefined) {
            return undefined;
        }

        const keys = pathKeys(path);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];

            const [head, body] = keyContent(key);
            const [headNull, headName] = head ?? [false, undefined];

            if(headName) {
                
            }

            if(body) {
                for(const [contentNull, contentValue] of body) {

                }
            }
        }
    }
}

export default Verhalt;