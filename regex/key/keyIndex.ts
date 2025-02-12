import { Verhalt } from "../../lib/verhalt";
import { VerhaltKeyIndex } from "../../lib/verhaltKey";
import VerhaltModel from "../../lib/verhaltModel";
import { pathKeysRegex } from "../path/pathKeys";

export const keyIndexRegex = new RegExp(`^(?:${pathKeysRegex.source}|^\\d+$)$`);

export function keyIndex(model : VerhaltModel, input: string) : VerhaltKeyIndex {
    const match = input?.match(keyIndexRegex) ?? undefined;

    if (match) {
        let index = Number(input);
        if(Number.isInteger(index)) {
            return index;
        }

        const value = Verhalt.value(model, input);
        if(Number.isInteger(value)) {
            return value as number;
        }
    }

    return undefined;
}