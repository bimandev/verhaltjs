export type VerhaltModel = VerhaltPrimitiveModel | VerhaltObjectModel | VerhaltArrayModel;

export type VerhaltModelType = "primitive" | "object" | "array";

export type VerhaltPrimitiveModel = undefined | null | boolean | number | string ;

export type VerhaltObjectModel = Record<string, any>;

export type VerhaltArrayModel = any[];