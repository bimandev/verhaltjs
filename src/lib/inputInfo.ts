import { CharInfo } from "./charInfo";

export class InputInfo {
    #input : string;
    #cursor : number = 0;
    #current : CharInfo | undefined ;

    constructor(input : string) {
        if(typeof input !== "string") throw new Error("[VERHALT-INPUTINFO]: Input must be string");

        this.#input = input;
        this.#current = new CharInfo(input[this.#cursor]);
    }

    public get input() : string {
        return this.#input;
    }

    public get cursor() : number {
        return this.#cursor;
    }

    public get current() : CharInfo | undefined  {
        return this.#current;
    }


    public next() : CharInfo | undefined {
        if(this.#cursor >= this.#input.length)
            return this.#current = undefined;

        return this.#current = new CharInfo(this.#input[this.#cursor + 1]);
    }
}