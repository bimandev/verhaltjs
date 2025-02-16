import { VerChar } from "./verChar";

export class VerObject {
    #input : string;
    #cursor : number = -1;
    #current : VerChar | undefined ;
    #curlyStack : number = 0;
    #squareStack : number = 0;

    constructor(input : string) {
        if(typeof input !== "string") throw new Error("[VERHALT-INPUTINFO]: Input must be string");

        this.#input = input;
        this.#current = this.next();
    }

    public get input() : string {
        return this.#input;
    }

    public get cursor() : number {
        return this.#cursor;
    }

    public get current() : VerChar | undefined  {
        return this.#current;
    }


    public get curlyStack() : number {
        return this.#curlyStack;
    }

    public get squareStack() : number {
        return this.#squareStack;
    }


    public next(calc : boolean = true) : VerChar | undefined {
        this.#cursor++;

        if(this.#cursor >= this.#input.length){
            this.#current = undefined;
        }
        else {
            this.#current = new VerChar(this.#input[this.#cursor]);

            if(calc) {
                switch(this.#current.target) {
                    case "{":
                        this.#curlyStack++;
                        break;
                    case "}":
                        this.#curlyStack--;
                        break;
                    case "[":
                        this.#squareStack++;
                        break;
                    case "]":
                        this.#squareStack--;
                        break;
                }
            }
        }

        return this.#current;
    }

    public skip(count : number = 1) {
        for(let i = 0; i < count; i++) {
            this.next(false);
        }
    }

    public isLast() : boolean {
        return this.#cursor === this.#input.length - 1;
    }

    //

    public error(message : string) {
       return new Error(message + "\ninput: " + this.#input + "\ncursor: " + this.#cursor);
    }

    public checkCurlyClose(head : string = "VERHALT-INPUTINFO") {
        if(this.#curlyStack < 0) {
            throw this.error(`[${head}]: Curly brackets are not balanced.`);
        }
    }

    public checkCurlyOpen(head : string = "VERHALT-INPUTINFO") {
        if(this.#curlyStack > 0) {
            throw this.error(`[${head}]: Curly brackets are not balanced.`);
        }
    }

    public checkSquareClose(head : string = "VERHALT-INPUTINFO") {
        if(this.#squareStack < 0) {
            throw this.error(`[${head}]: Square brackets are not balanced.`);
        }
    }

    public checkSquareOpen(head : string = "VERHALT-INPUTINFO") {
        if(this.#squareStack > 0) {
            throw this.error(`[${head}]: Square brackets are not balanced.`);
        }
    }
}