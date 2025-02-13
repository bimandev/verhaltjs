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
                        throw new Error("Anahtar adı bulunamadı.");
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
                    throw new Error("Anahtar adı bulunamadı.");
                }
            
                if (depth === 0) {
                    throw new Error("Köşeli parantezler dengeli değil.");
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
                    throw new Error("Geçersiz '?' karakteri.");
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
                throw new Error("Geçersiz karakter: Anahtar adı harf ile başlamalı.");
            }
        
            if (nameChars.length > 0 && !/[a-zA-Z0-9]/.test(char)) {
                throw new Error("Geçersiz karakter: Anahtar adı harf veya rakam içermeli.");
            }            
            nameChars.push(char);
        }

        if (depth !== 0) {
            isInsideBrackets = true;
        } else {
            isInsideBrackets = false;
        }
    }

    if (name === undefined) {
        name = nameChars.join("");
    }

    return [[name as string, isNullable], indexes];
}