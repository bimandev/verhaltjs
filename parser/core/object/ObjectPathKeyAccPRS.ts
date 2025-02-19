import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT } from "schnur/singletons";

export class ObjectPathKeyAccPRS extends SchnurParser {
    content : string = "";
    dynamic : boolean = false;

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
            if(char.isOpenCurlyBracket) {
                this.dynamic = true;
                return;
            }
            else if(char.isAlphabetic) {
                this.dynamic = false;
            }
            else {
                throw new Error("Key accessor must start with an alphabetic character or an open curly bracket.");
            }
        }
        else {
            if(this.dynamic) {
                if(char.isCloseCurlyBracket) {
                    return true;
                }
            }
            else {
                if(!char.isAlphanumeric) {
                    throw new Error("Key accessor must be alphanumeric.");
                }
            }
        }

        this.buffer.append();
    }

    protected finalize(): void {
        const buffer = this.sl.buffer<SchnurBufferSLT>();
        this.content = buffer.stash[0];
    }


    public static create(source : SchnurParserSource) : ObjectPathKeyAccPRS {
        return new ObjectPathKeyAccPRS(source);
    }
}