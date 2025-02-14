export function pathError(path : string, message : string) {
    return new Error(`
        Invalid path: ${message}
        \npath: ${path}`
    );
}