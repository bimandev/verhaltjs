import { pathKeysParser } from "../parsers/path/pathKeys";
import { pathValuesParser } from "../parsers/path/pathValues";

export class VerhaltPath {
    static keysParser(input? : string) : string[] {
        return pathKeysParser(input);
    }
    
    static valuesParser(input? : string) : string[] {
        return pathValuesParser(input);
    }
}

export default VerhaltPath;