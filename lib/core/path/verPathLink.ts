import { VerPathLinkOptions } from "./verPathLink.d";
import { VerPathPointer } from "./verPathPointer";
import { VerPathReference } from "./verPathReference";

export class VerPathLink {
    private _origin: VerPathReference;
    private _path : string;
    private _options : VerPathLinkOptions;
    private _pointers : VerPathPointer[];

    private _parent: VerPathReference | undefined;
    private _current: VerPathReference;

    constructor(origin : VerPathReference, path : string, options : VerPathLinkOptions, pointers : VerPathPointer[]) {
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


    public get origin() : VerPathReference {
        return this._origin;
    }

    public get path() : string {
        return this._path;
    }

    public get options() : VerPathLinkOptions {
        return this._options;
    }

    public get pointers() : ReadonlyArray<VerPathPointer> {
        return this._pointers;
    }


    public refs(includeOrigin : boolean = false) : VerPathReference[] {
        const refs: VerPathReference[] = [];

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

    public get parent() : VerPathReference | undefined {
        return this._parent;
    }

    public get current() : VerPathReference {
        return this._current;
    }
}