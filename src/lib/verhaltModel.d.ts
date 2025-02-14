export type VerhaltModel = VerhaltPrimitiveModel | VerhaltObjectModel;

export type VerhaltModelType = "primitive" | "object";

export type VerhaltPrimitiveModel = undefined | null | boolean | number | string ;

export type VerhaltObjectModel = VerhaltStructureModel | VerhaltArrayModel;

export type VerhaltStructureModel = Record<string, any>;

export type VerhaltArrayModel = any[];