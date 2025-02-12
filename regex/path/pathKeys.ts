export const rootKeyRegex = /(?:^:([a-z][a-zA-Z0-9]*(?:\[\S*\])[\?]?))|(\S)/g;

export function rootKey(input : string) : [string, string] | undefined {
    const match = input.match(rootKeyRegex)
    if (match) {
        return [match[0], match[1]]
    }

    return undefined;
}