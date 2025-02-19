import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurUseParserSLT } from "schnur/singletons";
import { ObjectPathKeyAccPRS } from "./ObjectPathKeyAccPRS";
import { ObjectPathKeyPosPRS } from "./ObjectPathKeyPosPRS";
import { ObjectPathKeyCallPRS } from "./ObjectPathKeyCallPRS";

export class ObjectPathKeyPRS extends SchnurParser {
    root : boolean;
    acc : ObjectPathKeyAccPRS | undefined;
    pacs : (ObjectPathKeyPosPRS | ObjectPathKeyCallPRS)[]= [];

    private constructor(source : SchnurParserSource) {
        super(source, (f) => ({
            [f.useAcc] : (s) => SchnurUseParserSLT.create(s, ObjectPathKeyAccPRS.create),
            [f.usePos] : (s) => SchnurUseParserSLT.create(s, ObjectPathKeyPosPRS.create),
            [f.useCall] : (s) => SchnurUseParserSLT.create(s, ObjectPathKeyCallPRS.create)
        }));
    }

    private get useAcc() : SchnurUseParserSLT<ObjectPathKeyAccPRS> {
        return this.sl.useAcc<SchnurUseParserSLT<ObjectPathKeyAccPRS>>();
    }

    private get usePos() : SchnurUseParserSLT<ObjectPathKeyPosPRS> {
        return this.sl.usePos<SchnurUseParserSLT<ObjectPathKeyPosPRS>>();
    }

    private get useCall() : SchnurUseParserSLT<ObjectPathKeyCallPRS> {
        return this.sl.useCall<SchnurUseParserSLT<ObjectPathKeyCallPRS>>();
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

    public static create(source : SchnurParserSource) : ObjectPathKeyPRS {
        return new ObjectPathKeyPRS(source);
    }
}