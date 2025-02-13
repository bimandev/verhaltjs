import { routePaths, pathKeys, keyContent } from "@verhalt/parser/lib"

export class Verhalt {
    public static value(route? : string) : any {
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
            const key = keys[0];

            const [head, body] = keyContent(key);
            const [headNull, headName] = head ?? [false, undefined];
            console.log([head, body]);

            if(body) {
                for(const [contentNull, contentValue] of body) {
                }
            }
        }
    }
}

export default Verhalt;