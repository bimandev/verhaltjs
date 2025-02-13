export type VerhaltKey = [VerhaltKeyHead, VerhaltKeyBody];

export type VerhaltKeyHead = [boolean, string?] | undefined;

export type VerhaltKeyBody = [boolean, number][] | undefined;