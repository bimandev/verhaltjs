export class VerhaltModus<TValue> {
    #impl : VerhaltModusImpl<TValue>;

    public constructor(impl : VerhaltModusImpl<TValue>) {
        this.#impl = impl;
    }


    public do(key : string, record : Record<string, TValue>, value : TValue) : void {
        record[key] = this.#impl(record[key], value);
    }
}

export type VerhaltModusImpl<TValue> = (prev : TValue, value : TValue) => TValue;