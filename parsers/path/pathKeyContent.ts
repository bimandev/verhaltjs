export function pathKeyContentParser(input?: string): [[string, boolean]?, [string, boolean][]?] {
    if (input === undefined) {
        return [undefined, undefined];
    }

    let name: string | undefined = undefined;
    const nameChars: string[] = [];
    let isNullable: boolean = false;

    let depth = 0;
    let depthChars: string[] = [];
    let isNullSignable: boolean = false;
    let isInsideBrackets: boolean = false;

    let indexes: [string, boolean][] = [];

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const currentIndexer = indexes[indexes.length - 1];

        if (!name) {
            switch (char) {
                case '?':
                    isNullSignable = true;
                    break;
                case '[':
                    if (nameChars.length === 0) {
                        throw new Error("Key name was not found.");
                    }
                    break;
            }            
            if (char === '[') {
                name = nameChars.join("");
            }
        } else {
            if (depth === 0 && char !== '?') {
                isNullSignable = false;
            }        
        }

        switch (char) {
            case '[': {
                if (depth === 0) {
                    indexes.push(["", false]);
                    depthChars = [];
                }
                depth++;
                break;
            }        
            case ']': {
                if (!name) {
                    throw new Error("Key name was not found.");
                }
            
                if (depth === 0) {
                    throw new Error("Square brackets are not balanced.");
                }
            
                if (depth === 1) {
                    currentIndexer[0] = depthChars.join("");
                    isNullSignable = true;
                }
                depth--;
                break;
            }
            case '?': {
                if (depth !== 0) {
                    break;
                }
            
                if (!isNullSignable) {
                    throw new Error("Invalid '?' Character");
                }
            
                if (currentIndexer) {
                    currentIndexer[1] = true;
                } else {
                    isNullable = true;
                }
                break;
            }
        }

        if (name) {
            if (isInsideBrackets) {
                depthChars.push(char);
            }
        } else {
            if (nameChars.length === 0 && !/[a-zA-Z]/.test(char)) {
                throw new Error("Invalid Character: Key name must start with a letter.");
            }
        
            if (nameChars.length > 0 && !/[a-zA-Z0-9]/.test(char)) {
                throw new Error("Invalid Character: Key name must contain letters or numbers.");
            }            
            nameChars.push(char);
        }

        if (depth !== 0) {
            isInsideBrackets = true;
        } else {
            isInsideBrackets = false;
        }
    }

    if (depth !== 0) {
        throw new Error("Square brackets are not balanced.");
    }

    if (name === undefined) {
        name = nameChars.join("");
    }

    return [[name as string, isNullable], indexes];
}