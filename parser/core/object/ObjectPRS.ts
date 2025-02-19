import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT, SchnurUseParserSLT } from "schnur/singletons";
import { ObjectKeyPRS } from "./ObjectKeyPRS";

export class ObjectPRS extends SchnurParser {
    keys : ObjectKeyPRS[] = [];

    private constructor(source : SchnurParserSource) {
        super(source, () => ({
            useKey: (source) => SchnurUseParserSLT.create(source, ObjectKeyPRS.create),
        }));
    }

    protected awake(): void {
        const useKey = this.sl.useKey<SchnurUseParserSLT<ObjectKeyPRS>>();
        useKey.start(false);
    }

    protected handle(): void | boolean {
        const useKey = this.sl.useKey<SchnurUseParserSLT<ObjectKeyPRS>>();
        const context = this.context;
        const char = context.targetChar;
        
        if(char.value === ".") {
            useKey.start(false);
        }
    }

    protected finalize(): void {
        const useKey = this.sl.useKey<SchnurUseParserSLT<ObjectKeyPRS>>();

        this.keys = useKey.history as ObjectKeyPRS[];
        for(const key of this.keys) {
            const buffer = key.sl.buffer<SchnurBufferSLT>();
            console.log(buffer.stash);
        }
    }


    public static create(source : SchnurParserSource) : ObjectPRS {
        return new ObjectPRS(source);
    }
}