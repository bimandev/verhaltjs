import { Verhalt } from "../../lib/verhalt";
import { VerhaltKeyIndex } from "../../lib/verhaltKey";
import VerhaltModel from "../../lib/verhaltModel";


export function keyIndex(model : VerhaltModel, input: string) : VerhaltKeyIndex {
    if(/^[1-9]\d*|0$/.test(input)) {
        return parseInt(input);
    }

    return Verhalt.value(model, input) as number;
}