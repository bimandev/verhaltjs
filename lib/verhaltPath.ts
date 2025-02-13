import { pathValuesParser } from "../parsers/path/pathValues";
import { pathKeysParser } from "../parsers/path/pathKeys";
import { pathKeyContentParser } from "../parsers/path/pathKeyContent";

export class VerhaltPath {
    static valuesParser(input? : string) : string[] {
        return pathValuesParser(input);
    }

    static keysParser(input? : string) : string[] {
        return pathKeysParser(input);
    }
    
    static keyContentParser(input? : string) {
        return pathKeyContentParser(input);
    }
}

export default VerhaltPath;