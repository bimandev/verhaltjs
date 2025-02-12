import { Verhalt } from "../../lib/verhalt";
import { VerhaltKeyIndex } from "../../lib/verhaltKey";
import VerhaltModel from "../../lib/verhaltModel";
import { pathKeysRegex } from "../path/pathKeys";

export const keyIndexRegex = new RegExp(`^(?:${pathKeysRegex.source}|/^\d+$/)$`);

export function keyIndex(model : VerhaltModel, input: string) : VerhaltKeyIndex | undefined {
    const match = input.match(keyIndexRegex);
    
    if (match) {
        if(match[1]) {
            return Verhalt.value(model, match[1] as string) as number;
        }
        else if(match[2]) {
            return parseInt(match[2], 10);
        }
    }

    return undefined;
}