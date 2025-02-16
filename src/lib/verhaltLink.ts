import { VerhaltLinkOptions } from "./verhaltLink.d";
import { VerhaltReference } from "./verhaltReference";

export class VerhaltLink {
    #refs : VerhaltReference[];
    #options : VerhaltLinkOptions;

    constructor(refs : VerhaltReference[], options : VerhaltLinkOptions) {
        this.#refs = refs;
        this.#options = options;
    }
}