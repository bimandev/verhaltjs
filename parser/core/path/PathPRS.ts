import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT, SchnurUseParserSLT } from "schnur/singletons";
import { PathKeyPRS } from "./PathKeyPRS";

export class PathPRS extends SchnurParser {
    keys : PathKeyPRS[] = [];

    private constructor(source : SchnurParserSource) {
        super(source, () => ({
            useKey: (source) => SchnurUseParserSLT.create(source, PathKeyPRS.create),
        }));
    }

    protected awake(): void {
        const useKey = this.sl.useKey<SchnurUseParserSLT<PathKeyPRS>>();
        useKey.start(false);
    }

    protected handle(): void | boolean {
        const useKey = this.sl.useKey<SchnurUseParserSLT<PathKeyPRS>>();
        const context = this.context;
        const char = context.targetChar;
        
        if(char.value === ".") {
            useKey.start(false);
        }
    }

    protected finalize(): void {
        const useKey = this.sl.useKey<SchnurUseParserSLT<PathKeyPRS>>();

        this.keys = useKey.history as PathKeyPRS[];
        for(const key of this.keys) {
            const buffer = key.sl.buffer<SchnurBufferSLT>();
            console.log(buffer.stash);
        }
    }


    public static create(source : SchnurParserSource) : PathPRS {
        return new PathPRS(source);
    }
}