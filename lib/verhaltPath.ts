export type VerhaltPath = `:${string}`;

export const verhaltPathRegex = /^:([a-zA-Z][a-zA-Z0-9]*)(?:\.([a-zA-Z][a-zA-Z0-9]*))*$/;
