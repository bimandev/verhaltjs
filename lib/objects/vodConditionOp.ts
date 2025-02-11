import VodCondition from "./vodCondition";

export type VodConditionOp<TValue> = [VodCondition<TValue>, string, VodCondition<TValue>];

export default VodConditionOp;