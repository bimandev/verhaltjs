export type VerhaltKey = [VerhaltKeyHead?, VerhaltKeyBody?];

export type VerhaltKeyNullable = boolean;

export type VerhaltKeyHead = [VerhaltKeyNullable, VerhaltKeyHeadName?];

export type VerhaltKeyHeadName = string | null;

export type VerhaltKeyBody = VerhaltKeyBodyContent[];

export type VerhaltKeyBodyIndex = number;

export type VerhaltKeyBodyContent = [VerhaltKeyNullable, VerhaltKeyBodyIndex];