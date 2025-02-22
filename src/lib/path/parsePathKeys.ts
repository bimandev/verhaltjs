export function parsePathKeys(input?: string): string[] { 
    if (!input) {
        return [];
    }

    const values: string[] = [];
    let currentKey: string[] = [];
    let depth = 0;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        switch (char) {
            case "[":
                depth++;
                break;

            case "]":
                if (depth === 0) {
                    throw new Error("Unmatched closing bracket.");
                }
                depth--;
                break;

            case " ":
                if (depth !== 0) {
                    break;
                }
                throw new Error("Unexpected space character.");
                
            case ":":
                if (depth !== 0) {
                    break;
                }
                if (currentKey.length === 0) {
                    break;
                }
                throw new Error("Unexpected colon character.");
                
            case ".":
                if (depth !== 0) {
                    break;
                }
                if (input[i + 1] === ".") {
                    throw new Error("Unexpected '..' sequence.");
                }
                values.push(currentKey.join(""));
                currentKey = [];
                break;
        }

        currentKey.push(char);
    }

    values.push(currentKey.join(""));

    return values;
}