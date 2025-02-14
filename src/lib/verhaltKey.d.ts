export type VerhaltKey = {
    head : VerhaltKeyHead
    body: VerhaltKeyBody 
};

export type VerhaltKeyItem = {
    value: string | number
    dynamic: boolean
    nullable: boolean
};

export type VerhaltKeyHead = { 
    silent : boolean
};

export type VerhaltKeyBody = { 
    name : VerhaltKeyItem
    indexes : VerhaltKeyItem[] 
};