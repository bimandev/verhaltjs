import { VerhaltLinkOptions } from "./verhaltLink.d";
import { VerhaltReference } from "./verhaltReference";

export class VerhaltLink {
    #refs : ReadonlyArray<VerhaltReference>;
    #options : VerhaltLinkOptions;

    #origin: VerhaltReference;
    #parent: VerhaltReference | undefined;
    #current: VerhaltReference;

    constructor(refs : VerhaltReference[], options : VerhaltLinkOptions) {
        this.#refs = refs;
        this.#options = options;

        this.#origin = refs[0];

        switch(this.#options.referenceHandling) {
            case "default":
                this.#current = this.#refs[this.#refs.length - 1];
                this.#parent = this.#refs[this.#refs.length - 2];
                break;
            case "source":
                this.#current = this.#refs[refs.length - 1];
                this.#parent = refs.length > 1 ? refs[refs.length - 2] : undefined;
                break;
        }
    }

    public get refs() : ReadonlyArray<VerhaltReference> {
        return this.#refs;
    }

    public get options() : VerhaltLinkOptions {
        return this.#options;
    }

    public get origin() : VerhaltReference {
        return this.#origin;
    }

    public get source() : VerhaltReference | undefined {
        return this.#refs[this.#refs.length - 2];
    }

    public get current() : VerhaltReference {
        return this.#refs[this.#refs.length - 1];
    }
}