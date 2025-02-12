import { Verhalt } from "../../lib/verhalt";
import { VerhaltKeyIndex } from "../../lib/verhaltKey";
import VerhaltModel from "../../lib/verhaltModel";
import { pathKeysRegex } from "../path/pathKeys";

export const keyIndexRegex = new RegExp(`^(?:${pathKeysRegex.source}|/^\d+$/)$`);

export function keyIndex(model : VerhaltModel, input: string) : VerhaltKeyIndex | undefined {
    const match = input?.match(keyIndexRegex) ?? undefined;

    if (match) {
        if(match[1]) {
            console.log(input, Verhalt.value(model, input));
            return Verhalt.value(model, input) as number;
        }
        else if(match[2]) {
            return parseInt(input, 10);
        }
    }

    return undefined;
}