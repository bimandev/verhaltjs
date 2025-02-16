import VodCond from "./vodCond";

export type VodLogic = [VodCond, VodLogicSymbol, VodCond];

export default VodLogic;

export type VodLogicSymbol = VodLogicAndSymbol | VodLogicOrSymbol;

export type VodLogicAndSymbol = "&&";

export type VodLogicOrSymbol = "||";