import { VerhaltKey, VerhaltKeyForm, VerhaltKeySteps, VerhaltStep } from "@verhalt/types/lib";
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

    const form : VerhaltKeyForm = isRoot ? "root" : "extension";
    const steps : VerhaltKeySteps = [];

    let info = new InputInfo(input);
    let keyBuffer : string[] = [];

    do {
        info.checkCurlyClose();
        info.checkSquareClose();

        const char = info.current as CharInfo;

        if(info.cursor === 0) {
            if(!(char.isAlphabetic || char.target === "_")) {
                if(isRoot && !(char.isCrulyOpenBracket || char.isSquareOpenBracket)) {
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

    info.checkCurlyOpen();
    info.checkCurlyOpen();

    return { form, steps, catching: "native" };
}