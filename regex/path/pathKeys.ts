import VerhaltPath from "../../lib/verhaltPath";

export function pathKeys(path: VerhaltPath) : string[] {
    if (path === undefined || path[0] !== ":") {
        throw new Error(`Path should start with ':' character\ninput: ${path}`);
    }

    const keys: string[] = [];
    let current: string[] = [];
    let cursor: number = 0;
    let depth: number = 0;
    let mode: PathKeysMode = "root";
    let named : boolean = false;

    for (let i = 0; i < path.length; i++) {
        const char = path[i];

        switch (char) {
            case ":": {
                if (i === 0) {
                    mode = "root";
                    cursor = -1;
                } else if (depth === 0) {
                    throw new Error(`':' character is not allowed in the middle of the path\ninput: ${path}`);
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
                if(!named && mode === "group") {
                    throw new Error(`The index was opened before naming was done.\ninput: ${path}`);
                }

                depth++;
                break;
            }
            case "]": {
                if(depth === 0) {
                    throw new Error(`Mismatch '[' character in path\ninput: ${path}`);
                }
                
                depth--;
                break;
            }
            case "?": {
                if(depth === 0) {
                    const next = path.length - 1 !== i ? path[i + 1] : undefined;
                    if(!(next === "." || next === undefined)) {
                        throw new Error(`Invalid character in path\npath: ${path}`);
                    } ":root?."
                }
                break;
            }
            default: {
                if (!/[a-zA-Z0-9]/.test(char)) {
                    throw new Error(`Invalid character in path\npath: ${path}`);
                }

                if (cursor === 0) {
                    if (/[0-9]/.test(char)) {
                        throw new Error(`"Key should not start with a number in path\ninput: ${path}`);
                    }
                }

                named = true;
            }
        }

        if (cursor === -1) {
            named = false;

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
        throw new Error(`Mismatch ']' character in path\ninput: ${path}`);
    }

    keys.push(current.join(""));
    current = [];
    return keys;
}

export type PathKeysMode = PathKeysModeRoot | PathKeysModeGroup;

export type PathKeysModeRoot = "root";

export type PathKeysModeGroup = "group";