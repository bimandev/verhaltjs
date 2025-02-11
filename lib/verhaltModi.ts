import { VerhaltModus } from "./verhaltModus";

export class VerhaltModi<TValue> {
    #map : Map<string, VerhaltModus<TValue>> = new Map();

    constructor(value : TValue, external? : [string, VerhaltModus<TValue>][]) {

        if (typeof value === "number") {
            this.#map.set("+", VerhaltModi.numberAdd as unknown as VerhaltModus<TValue>);
            this.#map.set("-", VerhaltModi.numberSub as unknown as VerhaltModus<TValue>);
            this.#map.set("*", VerhaltModi.numberMul as unknown as VerhaltModus<TValue>);
            this.#map.set("/", VerhaltModi.numberDiv as unknown as VerhaltModus<TValue>);
        }

        console.log(value);

        if(external !== undefined) {
            for (const [key, value] of external) {
                this.#map.set(key, value);
            }
        }
    }

    public modus(key : string) : VerhaltModus<TValue> | undefined {
        return this.#map.get(key);
    }

    //
    
    public static numberAdd : VerhaltModus<number> 
    = new VerhaltModus<number>((prev, value) => prev + value);

    public static numberSub : VerhaltModus<number>
    = new VerhaltModus<number>((prev, value) => prev - value);

    public static numberMul : VerhaltModus<number>
    = new VerhaltModus<number>((prev, value) => prev * value);

    public static numberDiv : VerhaltModus<number>
    = new VerhaltModus<number>((prev, value) => prev / value);
}