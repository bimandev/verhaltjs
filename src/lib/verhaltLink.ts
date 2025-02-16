import { VerhaltLinkOptions } from "./verhaltLink.d";
import { VerhaltReference } from "./verhaltReference";

export class VerhaltLink {
    #refs : VerhaltReference[];
    #options : VerhaltLinkOptions;

    #origin: VerhaltReference;
    #parent: VerhaltReference | undefined;
    #current: VerhaltReference;

    constructor(refs : VerhaltReference[], options : VerhaltLinkOptions) {
        this.#refs = refs;
        this.#options = options;

        this.#current = refs.length > 1 ? refs[refs.length - 1] : refs[0];
        this.#parent = refs.length > 2 ? refs[refs.length - 2] :  refs.length > 1 ? refs[0] : undefined;

        this.#origin = this.#options.includeOrigin ? refs[0] : refs.shift() as VerhaltReference;
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

    public get parent() : VerhaltReference | undefined {
        return this.#parent;
    }

    public get current() : VerhaltReference {
        return this.#current;
    }
}