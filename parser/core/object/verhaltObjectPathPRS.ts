import { Schnur } from "schnur";
import { VerhaltObjectParser } from "./verhaltObjectParser";
import { SchnurBracketCounterSLT, SchnurBufferSLT } from "schnur/singletons";

export class VerhaltObjectPathPRS extends VerhaltObjectParser {
    keys : string[] = [];

    private constructor(input : string) {
        super(input);

        Schnur.parse(input, (context, s) => {
            const char = context.char!;
            const bcounter = s.bcounter<SchnurBracketCounterSLT>();
            const buffer = s.buffer<SchnurBufferSLT>();

            if(context.cursor === 0) {
                if(char.value === ":") {
                    buffer.enable = true;
                }
                else {
                    throw new Error("Unexpected character");
                }
            }
            else {
                if(bcounter.balanced) {
                    if(char.value === "." || context.cursor === context.content.length - 1) {
                        buffer.flush();
                        this.keys.push(buffer.value);
                    }
                }
            }

            console.log(char.value, buffer.flushed, buffer.current);
        }, (f) => {return {
            [f.bcounter] : new SchnurBracketCounterSLT(),
            [f.buffer] : new SchnurBufferSLT({ active: false }),
        }});
    }

    public static from(input : string) : VerhaltObjectPathPRS {
        return new VerhaltObjectPathPRS(input);
    }
}