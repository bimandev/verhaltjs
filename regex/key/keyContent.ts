import VerhaltKey, { VerhaltKeyContent } from "../../lib/verhaltKey";

const regex = /^([a-zA-Z][a-zA-Z0-9]*)(?:\[([^\]]*)\])?$/;

export function keyContent(key: VerhaltKey) : VerhaltKeyContent | undefined {
    const match = key.match(regex);
    
    if (match) {
        const name = match[1];
        const index = match[2];

        return [name, index];
    }

    return undefined;
}