import { VerhaltEn } from "./verhaltEn";
import { VerhaltModi } from "./verhaltModi";

export class Verhalt {

    public static en<TModel extends object, TValue>(model : TModel, field : VerhaltEn<TValue>, modi? : VerhaltModi<TValue>) : void {
        let keys = field.path.split('.');
        let keysCompleted : string[] = [];

        let current = model;
        let targetKey : string | undefined = undefined;
        let targetRecord : Record<string, TValue> | undefined = undefined;

        while (keys.length > 0) {
            const wanted = keys.shift();

            if(wanted === undefined) {
                throw new Error(`Cannot update field ${field.path} on model, because ${keysCompleted.join('.')} is undefined.`);
            }

            keysCompleted.push(wanted);

            if(typeof current !== "object") {
                throw new Error(`Cannot update field ${field.path} on model, because ${keysCompleted.join('.')} is not an object.`);
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
            throw new Error(`Cannot update field ${field.path} on model, because ${keysCompleted.join('.')} is not found.`);
        }

        modi ??= new VerhaltModi<TValue>(field.value);
        const modus = field.modus ? modi.modus(field.modus) : undefined;

        if(modus === undefined) {
            targetRecord[targetKey] = field.value;
        }
        else {
            modus.do(targetKey, targetRecord, field.value);
        }
    }
}