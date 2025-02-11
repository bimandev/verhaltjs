import { VodObject } from "./vodObject";

export type VodDocument = {
    body : VodDocumentBody;
}

export default VodDocument;

export type VodDocumentBody = VodObject[];