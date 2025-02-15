export type VerhaltModel = VerhaltPrimitiveModel | VerhaltObjectModel;

export type VerhaltModelType = "primitive" | "object";

export type VerhaltPrimitiveModel = undefined | null | boolean | number | string ;

export type VerhaltPrimitiveType = "undefined" | "null" | "boolean" | "number" | "string";

export type VerhaltObjectModel = VerhaltStructureObject | VerhaltArrayObject;

export type VerhaltObjectModelType = "structure" | "array";

export type VerhaltStructureObject = Record<string, any>;

export type VerhaltArrayObject = any[];