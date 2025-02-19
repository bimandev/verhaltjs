import { Schnur } from "schnur";
import { SchnurParser } from "schnur/parsers";

export class VerhaltObjectPathPRS extends SchnurParser {
    keys : string[] = [];

    protected handle(): void | boolean {
        const context = this.context;
        const char = context.targetChar;
        
        console.log(char.value);
    }





    public static create() : VerhaltObjectPathPRS {
        return new VerhaltObjectPathPRS();
    }
}