import { SchnurParser, SchnurParserSource } from "schnur/parsers";
import { SchnurUseParserSLT } from "schnur/singletons";
import { PathKeyAccPRS } from "./PathKeyAccPRS";
import { PathKeyPosPRS } from "./PathKeyPosPRS";
import { PathKeyCallPRS } from "./PathKeyCallPRS";

export class PathKeyPRS extends SchnurParser {
    root : boolean;
    acc : PathKeyAccPRS | undefined;
    pacs : (PathKeyPosPRS | PathKeyCallPRS)[]= [];

    private constructor(source : SchnurParserSource) {
        super(source, (f) => ({
            [f.useAcc] : (s) => SchnurUseParserSLT.create(s, PathKeyAccPRS.create),
            [f.usePos] : (s) => SchnurUseParserSLT.create(s, PathKeyPosPRS.create),
            [f.useCall] : (s) => SchnurUseParserSLT.create(s, PathKeyCallPRS.create)
        }));
    }

    private get useAcc() : SchnurUseParserSLT<PathKeyAccPRS> {
        return this.sl.useAcc<SchnurUseParserSLT<PathKeyAccPRS>>();
    }

    private get usePos() : SchnurUseParserSLT<PathKeyPosPRS> {
        return this.sl.usePos<SchnurUseParserSLT<PathKeyPosPRS>>();
    }

    private get useCall() : SchnurUseParserSLT<PathKeyCallPRS> {
        return this.sl.useCall<SchnurUseParserSLT<PathKeyCallPRS>>();
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

    public static create(source : SchnurParserSource) : PathKeyPRS {
        return new PathKeyPRS(source);
    }
}