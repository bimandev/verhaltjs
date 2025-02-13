import { VerhaltPathKeyContent } from "./core/verhaltPath";
import { pathValuesParser } from "../parsers/path/pathValues";
import { pathKeysParser } from "../parsers/path/pathKeys";
import { pathKeyContentParser } from "../parsers/path/pathKeyContent";
import { pathKeyIndexParser } from "../parsers/path/pathKeyIndex";

export class VerhaltParser {
    static values(input? : string) : string[] {
        return pathValuesParser(input);
    }

    static keys(input? : string) : string[] {
        return pathKeysParser(input);
    }
    
    static keyContent(input? : string) : VerhaltPathKeyContent {
        return pathKeyContentParser(input);
    }

    static keyIndex(input? : string) : number {
        return pathKeyIndexParser(input);
    }
}

export default VerhaltParser;