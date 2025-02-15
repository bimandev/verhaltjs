import { CharInfo } from "./charInfo";

export class InputInfo {
    #input : string;
    #cursor : number = 0;
    #current : CharInfo | undefined ;
    #curlyCount : number = 0;
    #squareCount : number = 0;

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
        this.#cursor++;

        if(this.#cursor >= this.#input.length){
            this.#current = undefined;
        }
        else {
            this.#current = new CharInfo(this.#input[this.#cursor]);

            switch(this.#current.target) {
                case "{":
                    this.#curlyCount++;
                    break;
                case "}":
                    this.#curlyCount--;
                    break;
                case "[":
                    this.#squareCount++;
                    break;
                case "]":
                    this.#squareCount--;
                    break;
            }
        }

        return this.#current;
    }
}