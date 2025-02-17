import { Schnur } from "schnur";
import { VerhaltObjectParser } from "./verhaltObjectParser";
import { SchnurBracketCounterSLT, SchnurBufferSLT } from "schnur/singletons";

export class VerhaltObjectPathPRS extends VerhaltObjectParser {
    private constructor(input : string) {
        super(input);

        Schnur.parse(input, (context, s) => {
            const char = context.char!;
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
                else if(char.value === ".") {
                    if(buffer.enable) {
                        buffer.flush();
                    }
                    else {
                        throw new Error("Unexpected character");
                    }
                }
            }       
        }, (f) => {return {
            [f.bcounter] : new SchnurBracketCounterSLT(),
            [f.buffer] : new SchnurBufferSLT({ active: false }),
        }});
    }

    public static from(input : string) : VerhaltObjectPathPRS {
        return new VerhaltObjectPathPRS(input);
    }
}