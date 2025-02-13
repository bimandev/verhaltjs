import { pathValuesParser } from "../parsers/path/pathValues";
import { pathKeysParser } from "../parsers/path/pathKeys";
import { pathKeyContentParser } from "../parsers/path/pathKeyContent";
import { pathKeyIndexParser } from "../parsers/path/pathKeyIndex";

export class VerhaltPath {
    static valuesParser(input? : string) : string[] {
        return pathValuesParser(input);
    }

    static keysParser(input? : string) : string[] {
        return pathKeysParser(input);
    }
    
    static keyContentParser(input? : string) : VerhaltPathKeyContent {
        return pathKeyContentParser(input);
    }

    static keyIndexParser(input? : string) : number {
        return pathKeyIndexParser(input);
    }
}

export default VerhaltPath;

export type VerhaltPathKeyHead = [boolean, string?] | undefined;

export type VerhaltPathKeyBody = [boolean, number][] | undefined;

export type VerhaltPathKeyContent = [VerhaltPathKeyHead, VerhaltPathKeyBody];