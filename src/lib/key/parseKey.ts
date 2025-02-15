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

    let mode : string | undefined = undefined;
    let info = new InputInfo(input);
    let keyBuffer : string[] = [];

    do {
        const char = info.current as CharInfo;

        if(info.cursor === 0) {
            if(char.isAlphabetic) {
                mode = "pure";
            }
            else {
                if(char.isCrulyOpenBracket || char.isSquareOpenBracket) {
                    if(!isRoot) {
                        throw new Error("[VERHALT-KEY]: It must start with alphabetic character.");
                    }            
                }
                else {
                    throw new Error("[VERHALT-KEY]: It must start with alphabetic character.");
                }

                mode = char.isCrulyOpenBracket ? "cruly" : "square";
            }
        }
        else {
            if(mode === "pure") {
                if(char.isCrulyOpenBracket || char.isSquareOpenBracket || info.isLast()) {
                    if(info.isLast()) {
                        keyBuffer.push(char.target);
                    }

                    steps.push(parseStepUnsafe(keyBuffer.join("")) as VerhaltStep);
                    keyBuffer = [];
                }
                mode = "square";
            }
            else if (mode === "cruly") {     
                if((char.isCrulyOpenBracket && info.curlyStack === 1) || info.isLast()) {
                    if(info.isLast()) {
                        keyBuffer.push(char.target);
                    }

                    console.log(input);
                    steps.push(parseStepUnsafe(keyBuffer.join("")) as VerhaltStep);
                    keyBuffer = [];
                }
            }
            else if (mode === "square") {
                if((char.isSquareOpenBracket && info.squareStack === 1) || info.isLast()) {
                    if(info.isLast()) {
                        keyBuffer.push(char.target);
                    }

                    console.log(input);
                    steps.push(parseStepUnsafe(keyBuffer.join("")) as VerhaltStep);
                    keyBuffer = [];
                }
            }
        }

        keyBuffer.push(char.target);

    } while(info.next());

    return { steps, catching: "native" };
}