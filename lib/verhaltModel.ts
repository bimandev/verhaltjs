export type VerhaltModel = VerhaltModelObject | VerhaltModelArray;

export default VerhaltModel;

export type VerhaltModelObject = Record<string, any>;

export type VerhaltModelArray = any[];