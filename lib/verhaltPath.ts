export type VerhaltPath = `:${string}`;

export default VerhaltPath;

export const verhaltPathRegex = /^:([a-zA-Z][a-zA-Z0-9]*)(?:\.([a-zA-Z][a-zA-Z0-9]*))*$/;
