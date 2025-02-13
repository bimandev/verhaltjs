import { pathKeysParser } from "../parsers/path/pathKeys";

export class VerhaltPath {
    static keysParser(input? : string) : string[] {
        return pathKeysParser(input);
    }
}

export default VerhaltPath;