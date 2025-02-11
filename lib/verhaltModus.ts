export class VerhaltModus<TValue> {
    #name : string;
    #impl : VerhaltModusImpl<TValue>;

    public constructor(name : string, impl : VerhaltModusImpl<TValue>) {
        this.#name = name;
        this.#impl = impl;
    }


    public get name() {
        return this.#name;
    }

    public do(key : string, record : Record<string, TValue>, value : TValue) : void {
        record[key] = this.#impl(record[key], value);
    }
}

export type VerhaltModusImpl<TValue> = (prev : TValue, value : TValue) => TValue;