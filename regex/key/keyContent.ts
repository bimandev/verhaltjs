import VerhaltKey, { VerhaltKeyContent } from "../../lib/verhaltKey";
import VerhaltModel from "../../lib/verhaltModel";
import { keyIndex } from "./keyIndex";

const regex = /^([a-zA-Z][a-zA-Z0-9]*)(?:\[([^\]]*)\])?$/;

export function keyContent(model : VerhaltModel, input : string) : VerhaltKeyContent | undefined {
    const match = input.match(regex);
    
    if (match) {
        const name = match[1];
        const index = match[2];

        return [name, keyIndex(model, index) ?? -1];
    }

    return undefined;
}