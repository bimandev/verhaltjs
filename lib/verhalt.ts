import { keyContent } from "../regex/key/keyContent";
import { pathKeys } from "../regex/path/pathKeys";
import { VerhaltKeyContent, VerhaltKeyIndex } from "./verhaltKey";
import VerhaltModel, { VerhaltModelArray, VerhaltModelObject } from "./verhaltModel";
import VerhaltPath from "./verhaltPath";
import { VerhaltValue } from "./verhaltValue";
// :lib[:cigu]
export class Verhalt {
    public static value<TModel extends VerhaltModel>(model: TModel, path: VerhaltPath): VerhaltValue { 
        const keys = pathKeys(path);
        var target : VerhaltValue = model;

        for (let i = 0; i < keys.length; i++) {
            const [name, index, nullable] = keyContent(model, keys[i]);
            if(i === 0) {
                if(name === undefined) {
                    target = Verhalt.valueFromArray(target as VerhaltModel, index);
                } else {
                    target = Verhalt.valueFromObject(target as VerhaltModel, [name, index, nullable]);
                }
            } else {
                if(name === undefined) {
                    throw new Error("?VERHALT_VALUE=KEY_IS_UNDEFINED");
                }

                target = Verhalt.valueFromObject(target as VerhaltModel, [name, index, nullable]);
            }
        }

        return target;
    }

    private static valueFromArray(model : VerhaltModel, index : VerhaltKeyIndex) {
        if(!Array.isArray(model)) {
            throw new Error(`?VERHALT_VALUE=MODEL_IS_NOT_ARRAY\nmodel: ${model}\nindex: ${index}`);
        }          

        if(index === undefined) {
            throw new Error(`?VERHALT_VALUE=INDEX_IS_UNDEFINED\nmodel: ${model}\nindex: ${index}`);
        }

        return model[index];
    }

    private static valueFromObject(model : VerhaltModel, [name, index] : VerhaltKeyContent) {
        if(typeof model !== "object") {
            throw new Error(`?VERHALT_VALUE=MODEL_IS_NOT_OBJECT\nmodel: ${model}\nname: ${name}\nindex: ${index}`);
        }

        if(name === undefined) {
            throw new Error(`?VERHALT_VALUE=NAME_IS_UNDEFINED\nmodel: ${model}\nname: ${name}\nindex: ${index}`);
        }

        let target = (model as VerhaltModelObject)[name];

        if(index !== undefined) {
            target = Verhalt.valueFromArray(target, index);
        }

        return target;
    }
}