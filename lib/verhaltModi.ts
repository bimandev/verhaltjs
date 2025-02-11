import { VerhaltModus } from "./verhaltModus";

export class VerhaltModi<TValue> {
    #map : Map<string, VerhaltModus<TValue>> = new Map();

    constructor(external? : [string, VerhaltModus<TValue>][]) {
        if (typeof (undefined as any as TValue) === "number") {
            this.#map.set("add", VerhaltModi.numberAdd as unknown as VerhaltModus<TValue>);
            this.#map.set("sub", VerhaltModi.numberSub as unknown as VerhaltModus<TValue>);
            this.#map.set("mul", VerhaltModi.numberMul as unknown as VerhaltModus<TValue>);
            this.#map.set("div", VerhaltModi.numberDiv as unknown as VerhaltModus<TValue>);
        }

        if(external !== undefined) {
            for (const [key, value] of external) {
                this.#map.set(key, value);
            }
        }
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