import { VerhaltModus } from "./verhaltModus";

export class VerhaltModi {
    public static numberAdd : VerhaltModus<number> 
    = new VerhaltModus<number>("add", (prev, value) => prev + value);

    public static numberSub : VerhaltModus<number>
    = new VerhaltModus<number>("sub", (prev, value) => prev - value);

    public static numberMul : VerhaltModus<number>
    = new VerhaltModus<number>("mul", (prev, value) => prev * value);

    public static numberDiv : VerhaltModus<number>
    = new VerhaltModus<number>("div", (prev, value) => prev / value);
}