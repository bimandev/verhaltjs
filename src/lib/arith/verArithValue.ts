import { VerArithValueContent, VerArithValueType } from "./verArithValue.d";

export class VerArithValue {
    type : VerArithValueType;
    content : VerArithValueContent;

    constructor(type : VerArithValueType, content : VerArithValueContent) {
        this.type = type;
        this.content = content;
    }
}