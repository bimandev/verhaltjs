export const pathKeysRegex = /^:([a-zA-Z][a-zA-Z0-9]*)(?:\[[^\]]*\])?(?:\.[a-zA-Z][a-zA-Z0-9]*(?:\[[^\]]*\])?)*$/;

export function pathKeys(path: string) : string[] {
    const match = path.match(pathKeysRegex);

    if (!match) {
        return [];
    }

    return path.split(/[:.]/).filter(Boolean);
}