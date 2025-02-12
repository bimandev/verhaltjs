import VerhaltModel from "./verhaltModel";
import VerhaltPath, { verhaltPathRegex } from "./verhaltPath";
import { VerhaltValue } from "./verhaltValue";

export class Verhalt {
    public static value<TModel extends VerhaltModel>(model: TModel, path: VerhaltPath): VerhaltValue { 
        const pathMatch = path.match(verhaltPathRegex);

        if (pathMatch) {
            const keys = pathMatch.slice(1).filter((k) => k !== undefined);
            let target = model;

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const isLast = i === keys.length - 1;

                target = target[key];
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
        }

        return "?VERHALT_PATH_INVALID";
    }
}