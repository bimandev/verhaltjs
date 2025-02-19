import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT } from "schnur/singletons";

export class ObjectPathKeyPRS extends SchnurParser {
    private constructor(source : SchnurParserSource) {
        super(source, (f) => ({
            [f.buffer] : SchnurBufferSLT.create
        }));
    }

    protected handle(): void | boolean {
        const context = this.context;
        const char = context.targetChar;
        const buffer = this.sl.buffer<SchnurBufferSLT>();

        buffer.append();
        console.log(char.value);
    }


    public static create(source : SchnurParserSource) : ObjectPathKeyPRS {
        return new ObjectPathKeyPRS(source);
    }
}