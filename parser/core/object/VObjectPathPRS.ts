import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT, SchnurUseParserSLT } from "schnur/singletons";
import { VerhaltObjectKeyPRS } from "./VObjectPathKeyPRS";

export class VerhaltObjectPathPRS extends SchnurParser {
    keys : VerhaltObjectKeyPRS[] = [];

    private constructor(source : SchnurParserSource) {
        super(source, () => ({
            useKey: (source) => SchnurUseParserSLT.create(source, VerhaltObjectKeyPRS.create),
        }));
    }

    protected awake(): void {
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

        this.keys = useKey.history as VerhaltObjectKeyPRS[];
        for(const key of this.keys) {
            const buffer = key.sl.buffer<SchnurBufferSLT>();
            console.log(buffer.stash);
        }
    }


    public static create(source : SchnurParserSource) : VerhaltObjectPathPRS {
        return new VerhaltObjectPathPRS(source);
    }
}