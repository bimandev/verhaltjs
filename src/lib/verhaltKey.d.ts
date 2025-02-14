export type VerhaltKey = {
    head : VerhaltKeyHead, 
    body: VerhaltKeyBody 
};

export type VerhaltKeyItem = {
    value: string | null, 
    nullable: boolean 
};

export type VerhaltKeyHead = { 
    name : VerhaltKeyItem;
};

export type VerhaltKeyBody = { 
    indexes : VerhaltKeyItem[] 
};