import VerhaltModel, { VerhaltModelArray, VerhaltModelObject } from "./verhaltModel";
import VerhaltPath from "./verhaltPath";
import { VerhaltValue } from "./verhaltValue";
// :lib[:cigu]
export class Verhalt {
    /*public static value<TModel extends VerhaltModel>(model: TModel, path: VerhaltPath): VerhaltValue { 
        const keys : any[] = [] //pathKeys(path);
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

    public static pathGroups(input : string) {
        if (input === undefined || input[0] !== ":") {
            throw new Error(input);
        }
    
        const groups: string[] = [];
        let current: string[] = [];
        let depth: number = 0;
        let next: boolean = true;
    
        for (let i = 1; i < input.length; i++) { // i = 1'den başla, çünkü ilk karakter ":" zaten kontrol edildi
            const char = input[i];
    
            if (!next) {
                current.push(char);
            }
    
            switch (char) {
                case ":": {
                    if (depth === 0) {
                        if (!next) {
                            groups.push(current.join(""));
                            current = [];
                            next = true;
                        } else {
                            throw new Error(input);
                        }
                    }
                    break;
                }
                case "[": {
                    depth++;
                    break;
                }
                case "]": {
                    depth--;
                    break;
                }
                case "?": {
                    if (depth !== 0 || next) {
                        break;
                    }
    
                    // "??:" durumunu kontrol et
                    if (input[i + 1] === "?" && input[i + 2] === ":") {
                        next = true;
                        i += 2; // "??:" atla
                        groups.push(current.join(""));
                        current = [];
                        break;
                    }
    
                    // Tek "?" durumu
                    if (input[i + 1] === ":" || input[i + 1] === undefined) {
                        break;
                    }
    
                    throw new Error(input);
                }
            }
        }
    
        // Son grubu ekle
        if (current.length > 0) {
            groups.push(current.join(""));
        }
    
        return groups;
    }*/
}