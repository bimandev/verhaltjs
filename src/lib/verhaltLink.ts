import { VerhaltLinkOptions } from "./verhaltLink.d";
import { VerhaltReference } from "./verhaltReference";

export class VerhaltLink {
    #refs : VerhaltReference[];
    #options : VerhaltLinkOptions;

    constructor(refs : VerhaltReference[], options : VerhaltLinkOptions) {
        this.#refs = refs;
        this.#options = options;
    }

    public get origin() : VerhaltReference | undefined {
        if(this.#options.includeOrigin) {
            return this.#refs[0];
        }

        return undefined;
    }

    public get current() : VerhaltReference {
        return this.#refs[this.#refs.length - 1];
    }
}