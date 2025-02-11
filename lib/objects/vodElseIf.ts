import VodBody from "../vodBody";
import { VodIfContinue } from "./vodIf";

export type VodElseIf<TValue> = [string, string, TValue, VodBody, VodIfContinue<TValue>?];

export default VodElseIf;