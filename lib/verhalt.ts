import { VerhaltEn } from "./verhaltEn";
import { VerhaltModi } from "./verhaltModi";

export class Verhalt {

    public static en<TModel extends object, TValue>(model : TModel, en : VerhaltEn<TValue>, modi? : VerhaltModi<TValue>) : void {
        const [path, value, modus] = en;
        let keys = path.split('.');
        let keysCompleted : string[] = [];

        let current = model;
        let targetKey : string | undefined = undefined;
        let targetRecord : Record<string, TValue> | undefined = undefined;

        while (keys.length > 0) {
            const wanted = keys.shift();

            if(wanted === undefined) {
                throw new Error(`Cannot update field ${path} on model, because ${keysCompleted.join('.')} is undefined.`);
            }

            keysCompleted.push(wanted);

            if(typeof current !== "object") {
                throw new Error(`Cannot update field ${path} on model, because ${keysCompleted.join('.')} is not an object.`);
            }

            for (const [key, value] of Object.entries(current)) {
                if (key === wanted) {
                    if(keys.length === 0) {
                        targetKey = key;
                        targetRecord = current as Record<string, TValue>;
                    }

                    current = (current as Record<string, any>)[wanted];
                    break;
                }
            }
        }

        if(targetRecord === undefined || targetKey === undefined) {
            throw new Error(`Cannot update field ${path} on model, because ${keysCompleted.join('.')} is not found.`);
        }

        modi ??= new VerhaltModi<TValue>(value);
        const _modus = modus ? modi.modus(modus) : undefined;

        if(_modus === undefined) {
            targetRecord[targetKey] = value;
        }
        else {
            _modus.do(targetKey, targetRecord, value);
        }
    }
}