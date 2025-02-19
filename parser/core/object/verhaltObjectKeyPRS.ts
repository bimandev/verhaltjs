import { SchnurParser } from "schnur/parsers";
import { SchnurBufferSLT, SchnurUseParserSLT } from "schnur/singletons";
import { VerhaltObjectPathPRS } from "./verhaltObjectPathPRS";

export class VerhaltObjectKeyPRS extends SchnurParser {
    keys : VerhaltObjectPathPRS[] = [];

    private constructor() {
        super((f) => ({
            [f.buffer] : SchnurBufferSLT.create
        }));
    }

    protected handle(): void | boolean {
        const context = this.context;
        const char = context.targetChar;

        console.log(char.value);
    }


    public static create() : VerhaltObjectKeyPRS {
        return new VerhaltObjectKeyPRS();
    }
}