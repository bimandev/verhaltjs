export const rootValueRegex = /(?:^:([a-z][a-zA-Z0-9]*(?:\[\S*\])[\?]?))|(\S)/g;

export function rootValue(input : string) : [string, string] | undefined {
    const match = input.match(rootValueRegex)
    if (match) {
        return [match[0], match[1]]
    }

    return undefined;
}