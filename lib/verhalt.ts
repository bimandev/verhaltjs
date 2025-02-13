import VerhaltValue from "./core/verhaltValue";
import VerhaltParser from "./verhaltParser";

export class Verhalt {
    public static value(path? : string) : VerhaltValue {
        if(path === undefined) {
            return undefined;
        }

        const pathValues = VerhaltParser.pathValues(path);

        for(const pathWay of pathValues) {
            try {
                Verhalt.valueFromWay(pathWay);
            }
            catch(error) {
                if(pathValues[pathValues.length - 1] === pathWay) {
                    throw error;
                }

                continue;
            }
        }
    }

    private static valueFromWay(way? : string) : VerhaltValue {
        if(way === undefined) {
            return undefined;
        }

        const keys = VerhaltParser.pathKeys(way);

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            
            const content = VerhaltParser.pathKeyContent(key);
            console.log(content);
        }
    }
}

export default Verhalt;