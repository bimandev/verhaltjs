import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT, SchnurUseParserSLT } from "schnur/singletons";
import { ObjectPathKeyAccPRS } from "./ObjectPathKeyAccPRS";
import { ObjectPathKeyPosPRS } from "./ObjectPathKeyPosPRS";

export class ObjectPathKeyPRS extends SchnurParser {
    root : boolean;
    accs : ObjectPathKeyAccPRS[];
    pacs : (ObjectPathKeyPosPRS)[];

    private constructor(source : SchnurParserSource) {
        super(source, (f) => ({
            [f.useAcc] : (s) => SchnurUseParserSLT.create(s, ObjectPathKeyAccPRS.create),
            [f.usePos] : (s) => SchnurUseParserSLT.create(s, ObjectPathKeyPosPRS.create)
        }));
    }

    private get useAcc() : SchnurUseParserSLT<ObjectPathKeyAccPRS> {
        return this.sl.useAcc<SchnurUseParserSLT<ObjectPathKeyAccPRS>>();
    }

    private get usePos() : SchnurUseParserSLT<ObjectPathKeyPosPRS> {
        return this.sl.usePos<SchnurUseParserSLT<ObjectPathKeyPosPRS>>();
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
                this.useAcc.start(false);
                this.accs.push(this.useAcc.current!);
            }
            if(nextChar.isOpenSquareBracket) {
                this.usePos.start(false);   // ! Do current returnable
                this.pacs.push(this.usePos.current!);
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