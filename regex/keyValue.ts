const regex = /^([a-zA-Z][a-zA-Z0-9]*)(?:\[([^\]]*)\])?$/;

export function keyValue(key: string) : [string, string] | undefined {
    const match = key.match(regex);
    
    if (match) {
        const name = match[1];
        const content = match[2];

        return [name, content];
    }

    return undefined;
}