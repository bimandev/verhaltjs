import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurBufferSLT, SchnurUseParserSLT } from "schnur/singletons";
import { ObjectPathKeyAccPRS } from "./ObjectPathKeyAccPRS";

export class ObjectPathKeyPRS extends SchnurParser {
    root : boolean;
    accs : ObjectPathKeyAccPRS[];

    private constructor(source : SchnurParserSource) {
        super(source, (f) => ({
            [f.useAcc] : (s) => SchnurUseParserSLT.create(s, ObjectPathKeyAccPRS.create)
        }));
    }

    private get useAcc() : SchnurUseParserSLT<ObjectPathKeyAccPRS> {
        return this.sl.useAcc<SchnurUseParserSLT<ObjectPathKeyAccPRS>>();
    }

    protected handle(): void | boolean {
        const context = this.context;
        const char = context.targetChar;

        if(this.order === 0) {
            if(char.value === ":") {
                this.root = true;
                return;
            }
            else if(char.value === ".") {
                this.root = false;
                return;
            }
            else {
                throw new Error("Key must start with ':' or '.' character.");
            }
        }
        else {
            if(char.isOpenBracket) {            

            }
            else {
                this.useAcc.start(false);
            }
        }
    }

    protected finalize(): void {
        this.accs = this.useAcc.history;
    }

    public static create(source : SchnurParserSource) : ObjectPathKeyPRS {
        return new ObjectPathKeyPRS(source);
    }
}