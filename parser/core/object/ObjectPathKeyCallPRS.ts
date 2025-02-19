import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT } from "schnur/singletons";

export class ObjectPathKeyCallPRS extends SchnurParser {
    content : string = "";

    private constructor(source : SchnurParserSource) {
        super(source, (f) => ({
            [f.buffer] : SchnurBufferSLT.create
        }));
    }

    private get buffer() : SchnurBufferSLT {
        return this.sl.buffer<SchnurBufferSLT>();
    }

    protected handle(): void | boolean {
        const context = this.context;
        const char = context.targetChar;

        if(this.order === 0) {
            if(char.isOpenRoundBracket) {
                return;
            }
            else {
                throw new Error("Key pos must start with '(' character.");
            }
        }
        else {
            if(char.isCloseRoundBracket) {
                return true;
            }      
        }

        this.buffer.append();
    }

    protected finalize(): void {
        const buffer = this.sl.buffer<SchnurBufferSLT>();
        this.content = buffer.stash[0];
    }


    public static create(source : SchnurParserSource) : ObjectPathKeyCallPRS {
        return new ObjectPathKeyCallPRS(source);
    }
}