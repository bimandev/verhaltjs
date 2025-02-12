import { keyContent } from "../regex/key/keyContent";
import { pathKeys } from "../regex/path/pathKeys";
import VerhaltModel, { VerhaltModelObject } from "./verhaltModel";
import VerhaltPath from "./verhaltPath";
import { VerhaltValue } from "./verhaltValue";
// :lib[:cigu]
export class Verhalt {
    public static value<TModel extends VerhaltModel>(model: TModel, path: VerhaltPath): VerhaltValue { 
        const keys = pathKeys(path);
        let target = model as VerhaltModelObject;

        for (let i = 0; i < keys.length; i++) {
            const keyContentResult = keyContent(model, keys[i]);
            if (!keyContentResult) {
                return "?VERHALT_PATH_INVALID";
            }

            const [key, index] = keyContentResult;
            const isLast = i === keys.length - 1;

            target = target[key];

            if(index && Array.isArray(target)) {
                target = target[index] ?? undefined;
            }

            if(isLast) {
                return target;
            }

            if (target === null || typeof target !== "object") {
                return "?VERHALT_PATH_INCOMPLETE";
            }

            if (target === undefined) {
                return "?VERHALT_PATH_NOT_EXISTS";
            }
        }

        return "?VERHALT_PATH_INVALID";
    }
}