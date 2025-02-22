export type VerhaltModel = VerhaltPrimitiveModel | VerhaltObjectModel;

export type VerhaltModelForm = "primitive" | "object";

export type VerhaltPrimitiveModel = undefined | null | boolean | number | string ;

export type VerhaltPrimitiveForm = "undefined" | "null" | "boolean" | "number" | "string";

export type VerhaltObjectModel = VerhaltStructureObject | VerhaltArrayObject;

export type VerhaltObjectForm = "structure" | "array";

export type VerhaltStructureObject = Record<string, any>;

export type VerhaltArrayObject = any[];