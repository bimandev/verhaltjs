import { VerhaltKey, VerhaltKeyForm, VerhaltKeySteps, VerhaltStep } from "@verhalt/types/lib";
import { checkKey, checkKeyWithoutToken } from "./checkKey";
import { InputInfo } from "../../inputInfo";
import { CharInfo } from "../../charInfo";
import { parseStepUnsafe } from "./parseStep";

export function parseKey(input: string) : VerhaltKey | undefined {
    checkKey(input);

    return parseKeyUnsafe(input);
}

export function parseKeyUnsafe(input: string) : VerhaltKey | undefined {
    return parseKeyWithoutTokenUnsafe(input.substring(1), input[0] === ":");
}

export function parseKeyWithoutToken(input: string, isRoot : boolean = false) : VerhaltKey | undefined {
    checkKeyWithoutToken(input);

    return doParseKey(true, input, isRoot);
}

export function parseKeyWithoutTokenUnsafe(input: string, isRoot : boolean = false) : VerhaltKey | undefined {
    return doParseKey(false, input, isRoot);
}

//

export function doParseKey(safe : boolean, input: string, isRoot : boolean = false) : VerhaltKey | undefined {
    if(!input) return undefined;

    const head = "VERHALT-KEY";
    const form : VerhaltKeyForm = isRoot ? "root" : "extension";
    const steps : VerhaltKeySteps = [];

    let info = new InputInfo(input);
    let keyBuffer : string[] = [];
    let stepsBuffer : string[] = [];   

    do {
        if(safe) {
            info.checkCurlyOpen(head);
            info.checkSquareOpen(head);
        }

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

            stepsBuffer.push(keyBuffer.join(""));
            keyBuffer = [];
        }

        keyBuffer.push(char.target);

    } while(info.next());

    if(safe) {
        info.checkCurlyOpen(head);
        info.checkCurlyOpen(head);
    }

    for(let stepTXT of stepsBuffer) {
        const parsedStep = parseStepUnsafe(stepTXT);
        if(parsedStep) {
            steps.push(parsedStep);
        }
    }

    return { form, steps, catching: "native" };
}