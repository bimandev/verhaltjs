export type VerhaltPath = string;

export default VerhaltPath;

export type VerhaltPathError = VerhaltPathErrorInvalid | VerhaltPathErrorNotExists;

export type VerhaltPathErrorInvalid = "?VERHALT_PATH_INVALID";

export type VerhaltPathErrorIncomplete = "?VERHALT_PATH_INCOMPLETE";

export type VerhaltPathErrorNotExists = "?VERHALT_PATH_NOT_EXISTS";