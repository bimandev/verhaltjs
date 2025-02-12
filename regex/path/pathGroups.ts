export const rootGroupRegex = /(?:^:(\S*))|(..*)/g

export const optionalGroupsRegex = /(?:\s*\?\?\s(\S+))/g

export function rootGroup(input: string) : [string, string] | undefined {
    const match = input.match(rootGroupRegex)
    if (match) {
        return [match[1], match[2]]
    }

    return undefined;
}