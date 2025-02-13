export type VerhaltKey = [VerhaltKeyHead?, VerhaltKeyBody?];

export type VerhaltKeyNullable = boolean;

export type VerhaltKeyHead = [VerhaltKeyNullable, VerhaltKeyHeadName?];

export type VerhaltKeyHeadName = string | null;

export type VerhaltKeyBody = VerhaltKeyBodyContent[];

export type VerhaltKeyBodyValue= string;

export type VerhaltKeyBodyContent = [VerhaltKeyNullable, VerhaltKeyBodyValue];