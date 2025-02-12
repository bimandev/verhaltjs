export type VerhaltPath = `:${string}`;

export default VerhaltPath;

export type VerhaltPathError = VerhaltPathErrorInvalid | VerhaltPathErrorNotExists;

export type VerhaltPathErrorInvalid = "?VERHALT_PATH_INVALID";

export type VerhaltPathErrorIncomplete = "?VERHALT_PATH_INCOMPLETE";

export type VerhaltPathErrorNotExists = "?VERHALT_PATH_NOT_EXISTS";

export const verhaltPathRegex = /^:([a-zA-Z][a-zA-Z0-9]*)(?:\[[^\]]*\])?(?:\.[a-zA-Z][a-zA-Z0-9]*(?:\[[^\]]*\])?)*$/;
