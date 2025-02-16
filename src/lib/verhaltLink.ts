import { VerhaltLinkOptions } from "./verhaltLink.d";
import { VerhaltReference } from "./verhaltReference";

export class VerhaltLink {
    #refs : ReadonlyArray<VerhaltReference>;
    #options : VerhaltLinkOptions;

    constructor(refs : VerhaltReference[], options : VerhaltLinkOptions) {
        this.#refs = refs;
        this.#options = options;
    }

    public get refs() : ReadonlyArray<VerhaltReference> {
        return this.#refs;
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