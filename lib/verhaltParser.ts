import { VerhaltPathKeyContent } from "./core/verhaltPath";
import { pathValuesParser } from "../parsers/path/pathValues";
import { pathKeysParser } from "../parsers/path/pathKeys";
import { pathKeyContentParser } from "../parsers/path/pathKeyContent";
import { pathKeyIndexParser } from "../parsers/path/pathKeyIndex";

export class VerhaltParser {
    static pathValues(input? : string) : string[] {
        return pathValuesParser(input);
    }

    static pathKeys(input? : string) : string[] {
        return pathKeysParser(input);
    }
    
    static pathKeyContent(input? : string) : VerhaltPathKeyContent {
        return pathKeyContentParser(input);
    }

    static pathKeyIndex(input? : string) : number {
        return pathKeyIndexParser(input);
    }
}

export default VerhaltParser;