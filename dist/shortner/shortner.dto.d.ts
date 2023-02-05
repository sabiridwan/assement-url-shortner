export declare class Shortner {
    _id: string;
    name: string;
    url: string;
    shortUrl: string;
    createdAt: number;
}
export declare class ShortnerCreateInput {
    name: string;
    url: string;
}
export declare class ShortnerUpdateInput {
    name: string;
    url: string;
}
export declare class ShortnerQueryInput {
    _id: string;
    url: string;
    shortUrl: string;
}
export declare class ShortnerPageInput {
    skip: number;
    take: number;
    kewyword: string;
}
export declare class ShortnerPageResult {
    totalRecords: number;
    data: [Shortner];
}
