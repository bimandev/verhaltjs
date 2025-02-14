export function pathError(path : string, message : string) : Error;
export function pathError(keys : string[], message : string) : Error;
export function pathError(source : string | string[], message : string) : Error
export function pathError(source : string | string[], message : string) : Error {
    if(!Array.isArray(source)) {
        source = source.split("");
    }

    return new Error(`
        Invalid path: ${message}
        \npath: ${source}`
    );
}