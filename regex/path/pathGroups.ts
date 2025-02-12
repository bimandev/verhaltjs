export const rootGroupRegex = /(?:^:(\S*))|(..*)/g

export const optionalGroupsRegex = /(?:\s*\?\?\s(\S+))/g

export function rootGroup(input: string) : [string, string] | undefined {
    const match = input.match(rootGroupRegex)
    if (match) {
        return [match[0], match[1]]
    }

    return undefined;
}

export function optionalGroups(input: string) : string[] {
    const matches = input.matchAll(optionalGroupsRegex)
    const groups: string[] = []
    
    for (const match of matches) {
        groups.push(match[1])
    }

    return groups;
}
