export abstract class VerhaltObjectParser {
    #input : string

    public constructor(input : string) {
        this.#input = input
    }

    public get input() : string {
        return this.#input
    }
}