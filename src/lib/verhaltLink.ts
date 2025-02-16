import { VerhaltLinkOptions } from "./verhaltLink.d";
import { VerhaltPointer } from "./verhaltPointer";
import { VerhaltReference } from "./verhaltReference";

export class VerhaltLink {
    #origin: VerhaltReference;
    #pointers : VerhaltPointer[];
    #options : VerhaltLinkOptions;

    #parent: VerhaltReference | undefined;
    #current: VerhaltReference;

    constructor(origin : VerhaltReference, pointers : VerhaltPointer[], options : VerhaltLinkOptions) {
        this.#origin = origin;
        this.#pointers = pointers;
        this.#options = options;

        const lastPointer = pointers[pointers.length - 1];
        const lastKey = lastPointer.refs[lastPointer.refs.length - 1];
        this.#current = lastKey;

        if (lastPointer.refs.length > 1) {
            const parentKey = lastPointer.refs[lastPointer.refs.length - 2];
            this.#parent = parentKey;
        } else {
            const secondLastPointer = pointers[pointers.length - 2];
            if (secondLastPointer) {
                this.#parent = secondLastPointer.refs[secondLastPointer.refs.length - 1];
            } else {
                this.#parent = undefined;
            }
        }
    }

    public get pointers() : ReadonlyArray<VerhaltPointer> {
        return this.#pointers;
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