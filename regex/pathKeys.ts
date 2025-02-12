import { verhaltPathRegex } from "../lib/verhaltPath";

export function pathKeys(path: string) : string[] {
    const match = path.match(verhaltPathRegex);

    if (!match) {
        return [];
    }

    return path.split(/[:.]/).filter(Boolean);
}