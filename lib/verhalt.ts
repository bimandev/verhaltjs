import { routePaths, pathKeys, keyContent } from "@verhalt/parser/lib"

export class Verhalt {
    public static value(path? : string) : any {
        if(path === undefined) {
            return undefined;
        }

        const paths = routePaths(path);

        for(const pathWay of paths) {
            try {
                Verhalt.valueFromWay(pathWay);
            }
            catch(error) {
                if(paths[paths.length - 1] === pathWay) {
                    throw error;
                }

                continue;
            }
        }
    }

    private static valueFromWay(way? : string) : any {
        if(way === undefined) {
            return undefined;
        }

        const keys = pathKeys(way);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            
            const content = keyContent(key);
            console.log(content);
        }
    }
}

export default Verhalt;