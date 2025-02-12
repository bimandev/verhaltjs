export function pathValueParser(input: string) : string[] {
    if(input === undefined || input[0] !== ":") {
        throw new Error();
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

                if(input.slice(i, i + 4) === " ?? ") {
                    i += 3;

                    values.push(record.join(""));
                    record = [];
                    disable = true;
                    break;
                }

                throw new Error();
            }
        }

        if(!disable)
            record.push(char);
    }

    values.push(record.join(""));
    record = [];

    return values;
}