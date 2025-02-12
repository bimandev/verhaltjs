export const rootKeyRegex = /(?:^:([a-z][a-zA-Z0-9]*(?:\[\S*\])[\?]?))|(..*)/g;

export function rootKey(input : string) : [string, string] | undefined {
    const match = input.match(rootKeyRegex)
    if (match) {
        return [match[0], match[1]]
    }

    return undefined;
}

export function continueKeys(input : string) {
    const groups = [];
    let current = '';
    let depth = 0;
    let i = 0;

    while (i < input.length) {
        const char = input[i];

        if (char === '.' && depth === 0) {
            if (current !== '') {
                groups.push(current);
            }
            current = '.';
            i++;
            continue;
        }

        if (char === '[') {
            depth++;
        } else if (char === ']') {
            depth--;
        }

        current += char;
        i++;
    }

    if (current !== '') {
        groups.push(current);
    }

    return groups;
}