import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT } from "schnur/singletons";

export class VerhaltObjectKeyAccPRS extends SchnurParser {
    dynamic : boolean = false;

    private constructor(source : SchnurParserSource) {
        super(source, (f) => ({
            [f.buffer] : SchnurBufferSLT.create
        }));
    }

    protected handle(): void | boolean {
        const context = this.context;
        const char = context.targetChar;
        const buffer = this.sl.buffer<SchnurBufferSLT>();

        if(this.order === 0) {
            if(char.isOpenCurlyBracket) {
                this.dynamic = true;
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

        buffer.append();
    }


    public static create(source : SchnurParserSource) : VerhaltObjectKeyAccPRS {
        return new VerhaltObjectKeyAccPRS(source);
    }
}