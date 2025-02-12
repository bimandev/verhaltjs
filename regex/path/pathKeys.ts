import VerhaltPath from "../../lib/verhaltPath";

export const pathKeysRegex = /(:[^.]+)|(\.[^.]+)/g;

export function pathKeys(path: VerhaltPath) : string[] {
    if(path === undefined || path[0] !== ":") {
        return [];
    }

    const match = path?.match(pathKeysRegex) ?? undefined;

    if (!match) {
        return [];
    }

    return match.slice(0).map((x) => x.slice(1));
}