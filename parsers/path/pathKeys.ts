export function pathKeysParser(input? : string) : string[] {
    if(input === undefined) {
        return [];
    }

    const values : string[] = []; // :haha[]
    let record : string[] = [];
    let depth : number = 0;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        let disable = false;

        switch (char) {
            case "[" : {
                depth++;
                break;
            }
            case "]" : {
                if(depth === 0) {
                    throw new Error();
                }

                depth--;
                break;
            }
            case " " : {
                if(depth !== 0) {
                    break;
                }

                throw new Error();
            }
            case ":" : {
                if(depth !== 0) {
                    break;
                }

                if(record.length === 0) {
                    disable = true;
                    break;
                }

                throw new Error();
            }
            case "." : {
                if(depth !== 0) {
                    break;
                }

                if(input[i + 1] === ".") {
                    throw new Error();
                }

                values.push(record.join(""));
                record = [];
                disable = true;
                break;
            }
        }

        if(!disable)
            record.push(char);
    }

    values.push(record.join(""));
    record = [];

    return values;
}