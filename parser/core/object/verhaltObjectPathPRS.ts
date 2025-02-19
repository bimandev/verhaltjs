import { SchnurParser } from "schnur/parsers";
import { SchnurBufferSLT, SchnurUseParserSLT } from "schnur/singletons";
import { VerhaltObjectKeyPRS } from "./verhaltObjectKeyPRS";

export class VerhaltObjectPathPRS extends SchnurParser {
    keys : string[] = [];

    private constructor() {
        super(() => ({
            useKey: (sr) => SchnurUseParserSLT.create(sr, VerhaltObjectKeyPRS.create),
        }));
    }

    protected awake(): void | boolean {
        const useKey = this.sl.useKey<SchnurUseParserSLT>();
        useKey.start(false);
    }

    protected handle(): void | boolean {
        const useKey = this.sl.useKey<SchnurUseParserSLT>();
        const context = this.context;
        const char = context.targetChar;
        
        if(char.value === ".") {
            useKey.start(false);
        }
    }

    protected finalize(): void {
        const useKey = this.sl.useKey<SchnurUseParserSLT>();

        for(const key of useKey.history as VerhaltObjectKeyPRS[]) {
            const buffer = key.sl.buffer<SchnurBufferSLT>();
            console.log(buffer.stash);
        }
    }


    public static create() : VerhaltObjectPathPRS {
        return new VerhaltObjectPathPRS();
    }
}