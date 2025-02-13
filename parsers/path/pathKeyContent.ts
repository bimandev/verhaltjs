import { VerhaltPathKeyBody, VerhaltPathKeyContent, VerhaltPathKeyHead } from "../../lib/verhaltPath";
import { pathKeyIndexParser } from "./pathKeyIndex";

export function pathKeyContentParser(input?: string) : VerhaltPathKeyContent {
    if (input === undefined) {
        return [undefined, undefined];
    }

    const nameChars: string[] = [];
    let isNullable: boolean = false;

    let depth = 0;
    let depthChars: string[] = [];
    let isNullSignable: boolean = false;
    let isInsideBrackets: boolean = false;

    let head : VerhaltPathKeyHead = [false, undefined];
    let body : VerhaltPathKeyBody = [];

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const current = body[body.length - 1];

        if (!head[1]) {
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
                head[1] = nameChars.join("");
            }
        } else {
            if (depth === 0 && char !== '?') {
                isNullSignable = false;
            }        
        }

        switch (char) {
            case '[': {
                if (depth === 0) {
                    body.push([false, -1]);
                    depthChars = [];
                }
                depth++;
                break;
            }        
            case ']': {
                if (!head[1]) {
                    throw new Error("Key name was not found.");
                }
            
                if (depth === 0) {
                    throw new Error("Square brackets are not balanced.");
                }
            
                if (depth === 1) {
                    current[1] = pathKeyIndexParser(depthChars.join(""));
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
            
                if (current) {
                    current[0] = true;
                } else {
                    isNullable = true;
                }
                break;
            }
        }

        if (head[1]) {
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

    if (head[1] === undefined) {
        head[1] = nameChars.join("");
    }

    return [head, body];
}