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

    const head = "VERHALT-KEY";
    const form : VerhaltKeyForm = isRoot ? "root" : "extension";
    const steps : VerhaltKeySteps = [];

    let info = new InputInfo(input);
    let keyBuffer : string[] = [];
    let stepsBuffer : string[] = [];   

    do {
        info.checkCurlyClose(head);
        info.checkSquareClose(head);

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

    info.checkCurlyOpen(head);
    info.checkCurlyOpen(head);

    for(let stepTXT of stepsBuffer) {
        const parsedStep = parseStepUnsafe(stepTXT);
        if(parsedStep) {
            steps.push(parsedStep);
        }
    }

    return { form, steps, catching: "native" };
}