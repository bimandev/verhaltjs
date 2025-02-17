import { Schnur } from "schnur";
import { VerhaltObjectParser } from "./verhaltObjectParser";
import { SchnurBracketCounterSLT, SchnurBufferSLT } from "schnur/singletons";

export class VerhaltObjectPathPRS extends VerhaltObjectParser {
    constructor(input : string) {
        super(input);

        Schnur.parse(input, (char, s) => {
            const bcounter = s.bcounter<SchnurBracketCounterSLT>();
            const buffer = s.buffer<SchnurBufferSLT>();

            if(bcounter.balanced) {
                if(char.value === ":") {
                    if(!buffer.enable) {
                        buffer.enable = true;
                    }
                    else {
                        throw new Error("Unexpected ':' character is must be in first position");
                    }
                }
            }

            
        }, (f) => {return {
            [f.bcounter] : new SchnurBracketCounterSLT(),
            [f.buffer] : new SchnurBufferSLT({ active: false }),
        }});
    }
}