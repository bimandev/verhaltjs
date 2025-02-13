export function pathKeyContentParser(input? : string) : [[string, boolean]?, [string, boolean][]?] {
    if(input === undefined) {
        return [undefined, undefined];
    }
    let name : string | undefined = undefined;
    const nameChars : string[] = []
    let nullable : boolean = false;

    let depth = 0;
    let depthChars : string[] = [];
    let nullSignable = false;
    let beginDepth = false;

    let indexes : [string, boolean][] = [];

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const indexer = indexes[indexes.length - 1];
        
        if(name) {
            if(depth === 0) {
                if(char !== "?") {
                    nullSignable = false;
                }
            }
        }
        else {
            switch(char) {
                case "?" : {
                    nullSignable = true;
                }
                case "[" : {
                    if(nameChars.length === 0) {
                        throw new Error();
                    }

                    name = nameChars.join("");
                    break;
                }
            }
        }

        switch (char) {
            case "[" : {
                if(depth === 0) {
                    indexes.push(["", false]);
                    depthChars = [];
                }

                depth++;
                break;
            }
            case "]" : {
                if(!name) {
                    throw new Error();
                }

                if(depth === 0) {
                    throw new Error();
                }

                depth--;

                if(depth === 0) {
                    indexer[0] = depthChars.join("");
                    nullSignable = true;
                    beginDepth = false;
                }
                break;
            }
            case "?" : {
                if(depth !== 0) {
                    break;
                }

                if(!nullSignable) {
                    throw new Error();
                }

                if(indexer) {
                    indexer[1] = true;
                }
                else {
                    nullable = true;
                }
            }
        }

        if(name) {
            if(beginDepth) {
                depthChars.push(char);
            }
        }
        else {
            if(nameChars.length === 0) {
                if(!/[a-zA-Z]/.test(char)) {
                    throw new Error();
                }
            }
            else {
                if(!/[a-zA-Z0-9]/.test(char)) {
                    throw new Error();
                }
            }

            nameChars.push(char);
        }

        if(depth !== 0) {
            beginDepth = true;
        }
    }

    return [[name as string, nullable], indexes];
}