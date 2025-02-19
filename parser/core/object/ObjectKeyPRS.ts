import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurUseParserSLT } from "schnur/singletons";
import { ObjectKeyAccPRS } from "./ObjectKeyAccPRS";
import { ObjectKeyPosPRS } from "./ObjectKeyPosPRS";
import { ObjectKeyCallPRS } from "./ObjectKeyCallPRS";

export class ObjectKeyPRS extends SchnurParser {
    root : boolean;
    acc : ObjectKeyAccPRS | undefined;
    pacs : (ObjectKeyPosPRS | ObjectKeyCallPRS)[]= [];

    private constructor(source : SchnurParserSource) {
        super(source, (f) => ({
            [f.useAcc] : (s) => SchnurUseParserSLT.create(s, ObjectKeyAccPRS.create),
            [f.usePos] : (s) => SchnurUseParserSLT.create(s, ObjectKeyPosPRS.create),
            [f.useCall] : (s) => SchnurUseParserSLT.create(s, ObjectKeyCallPRS.create)
        }));
    }

    private get useAcc() : SchnurUseParserSLT<ObjectKeyAccPRS> {
        return this.sl.useAcc<SchnurUseParserSLT<ObjectKeyAccPRS>>();
    }

    private get usePos() : SchnurUseParserSLT<ObjectKeyPosPRS> {
        return this.sl.usePos<SchnurUseParserSLT<ObjectKeyPosPRS>>();
    }

    private get useCall() : SchnurUseParserSLT<ObjectKeyCallPRS> {
        return this.sl.useCall<SchnurUseParserSLT<ObjectKeyCallPRS>>();
    }

    protected handle(): void | boolean {
        const context = this.context;
        const char = context.targetChar;
        const nextChar = context.nextChar;

        if(this.order === 0) {
            if(char.value === ":") {
                this.root = true;
            }
            else if(char.value === ".") {
                this.root = false;
            }
            else {
                throw new Error("Key must start with ':' or '.' character.");
            }
        }
        
        if(nextChar) {
            if(nextChar.isOpenCurlyBracket) {
                if(this.acc) {
                    throw new Error("Key accessor already defined.");
                }

                this.acc = this.useAcc.start(false);
            }
            else if(nextChar.isOpenSquareBracket) {
                this.pacs.push(this.usePos.start(false));
            }
            else if(nextChar.isOpenRoundBracket) {
                this.pacs.push(this.useCall.start(false));
            }
        }
    }

    /*protected finalize(): void {
        this.accs = this.useAcc.history;
    }*/

    public static create(source : SchnurParserSource) : ObjectKeyPRS {
        return new ObjectKeyPRS(source);
    }
}