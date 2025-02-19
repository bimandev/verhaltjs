import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT, SchnurUseParserSLT } from "schnur/singletons";
import { VerhaltObjectModel } from "../../../lib/verhaltModel";
import { PathKeyPRS } from "./PathKeyPRS";

export class PathPRS extends SchnurParser {
    model : VerhaltObjectModel;
    keys : PathKeyPRS[] = [];

    private constructor(model : VerhaltObjectModel, source : SchnurParserSource) {
        super(source, () => ({
            useKey: (source) => SchnurUseParserSLT.create(source, PathKeyPRS.create),
        }));

        this.model = model;
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


    public static create(model : VerhaltObjectModel, source : SchnurParserSource) : PathPRS {
        return new PathPRS(model, source);
    }
}