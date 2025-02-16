import { VerhaltLinkOptions } from "./verhaltLink.d";
import { VerhaltPointer } from "./verhaltPointer";
import { VerhaltReference } from "./verPathReference";

export class VerhaltLink {
    private _origin: VerhaltReference;
    private _path : string;
    private _options : VerhaltLinkOptions;
    private _pointers : VerhaltPointer[];

    private _parent: VerhaltReference | undefined;
    private _current: VerhaltReference;

    constructor(origin : VerhaltReference, path : string, options : VerhaltLinkOptions, pointers : VerhaltPointer[]) {
        this._origin = origin;
        this._path = path;
        this._options = options;
        this._pointers = pointers;

        const lastPointer = pointers[pointers.length - 1];
        const lastKey = lastPointer.refs[lastPointer.refs.length - 1];
        this._current = lastKey;

        if (lastPointer.refs.length > 1) {
            const parentKey = lastPointer.refs[lastPointer.refs.length - 2];
            this._parent = parentKey;
        } else {
            const secondLastPointer = pointers[pointers.length - 2];
            if (secondLastPointer) {
                this._parent = secondLastPointer.refs[secondLastPointer.refs.length - 1];
            } else {
                this._parent = undefined;
            }
        }
    }


    public get origin() : VerhaltReference {
        return this._origin;
    }

    public get path() : string {
        return this._path;
    }

    public get options() : VerhaltLinkOptions {
        return this._options;
    }

    public get pointers() : ReadonlyArray<VerhaltPointer> {
        return this._pointers;
    }


    public refs(includeOrigin : boolean = false) : VerhaltReference[] {
        const refs: VerhaltReference[] = [];

        if (includeOrigin) {
            refs.push(this.origin);
        }

        for (const pointer of this._pointers) {
            for (const ref of pointer.refs) {
                refs.push(ref);
            }
        }
        return refs;
    }

    public get parent() : VerhaltReference | undefined {
        return this._parent;
    }

    public get current() : VerhaltReference {
        return this._current;
    }
}