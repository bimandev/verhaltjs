import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT } from "schnur/singletons";

export class VerhaltObjectKeyPRS extends SchnurParser {
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


    public static create(source : SchnurParserSource) : VerhaltObjectKeyPRS {
        return new VerhaltObjectKeyPRS(source);
    }
}