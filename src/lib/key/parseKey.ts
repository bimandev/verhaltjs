import { VerhaltKey, VerhaltKeySteps, VerhaltStep } from "@verhalt/types/lib";
import { checkKey, checkKeyWithoutToken } from "./checkKey";
import { InputInfo } from "../inputInfo";
import { CharInfo } from "../charInfo";
import { parseStepUnsafe } from "../step/parseStep";

export function parseKey(input: string) : VerhaltKey | undefined {
    checkKey(input);

    return parseKeyUnsafe(input);
}

export function parseKeyUnsafe(input: string) : VerhaltKey | undefined {
    return parseKeyWithoutTokenUnsafe(input.substring(1), input[0] === ":");
}

export function parseKeyWithoutToken(input: string) : VerhaltKey | undefined {
    checkKeyWithoutToken(input);

    return parseKeyWithoutTokenUnsafe(input);
}

export function parseKeyWithoutTokenUnsafe(input: string, isRoot : boolean = false) : VerhaltKey | undefined {
    if(!input) return undefined;

    const steps : VerhaltKeySteps = [];

    let info = new InputInfo(input);
    let keyBuffer : string[] = [];

    do {
        const char = info.current as CharInfo;
        // {haha}>?[:dereshishishi{23}]

        if(info.cursor === 0) {
            if(!char.isAlphabetic) {
                if(char.isCrulyOpenBracket || char.isSquareOpenBracket) {
                    if(!isRoot) {
                        throw new Error("[VERHALT-KEY]: It must start with alphabetic character.");
                    }            
                }
                else {
                    throw new Error("[VERHALT-KEY]: It must start with alphabetic character.");
                }
            }
        }

        if(info.isLast() || (char.isSquareOpenBracket && info.squareStack === 1)) {
            if(info.isLast()) {
                keyBuffer.push(char.target);
            }

            steps.push(parseStepUnsafe(keyBuffer.join("")) as VerhaltStep);
            keyBuffer = [];
        }

        keyBuffer.push(char.target);

    } while(info.next());

    return { steps, catching: "native" };
}