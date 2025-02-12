import VerhaltPath from "../../lib/verhaltPath";

export const pathKeysRegex = /(:[^.]+)|(\.[^.]+)/g;

export function pathKeys(path: VerhaltPath) : string[] {
    if (path === undefined || path[0] !== ":") {
        throw new Error("Path should start with ':' character");
    }

    const keys: string[] = [];
    let current: string[] = [];
    let cursor: number = 0;
    let depth: number = 0;
    let mode: PathKeysMode = "root";

    for (let i = 0; i < path.length; i++) {
        const char = path[i];

        switch (char) {
            case ":": {
                if (i === 0) {
                    mode = "root";
                    cursor = -1;
                } else if (depth === 0) {
                    throw new Error("':' character is not allowed in the middle of the path");
                }
                break;
            }
            case ".": {
                if (depth === 0) {
                    mode = "group";
                    cursor = -1;
                }
                break;
            }
            case "[": {
                depth++;
                break;
            }
            case "]": {
                if(depth === 0) {
                    throw new Error("Mismatch '[' character in path");
                }
                
                depth--;
                break;
            }
            default: {
                if (!/[a-zA-Z0-9]/.test(char)) {
                    throw new Error("Invalid character in path");
                }

                if (cursor === 0) {
                    if (/[0-9]/.test(char)) {
                        throw new Error("Key should not start with a number");
                    }
                }
            }
        }

        if (cursor === -1) {
            if (mode === "group") {
                keys.push(current.join(""));
                current = [];
            }
        } else {
            current.push(char);
        }

        cursor++;
    }

    if(depth !== 0) {
        throw new Error("Mismatch ']' character in path");
    }

    keys.push(current.join(""));
    current = [];
    return keys;
}

export type PathKeysMode = PathKeysModeRoot | PathKeysModeGroup;

export type PathKeysModeRoot = "root";

export type PathKeysModeGroup = "group";