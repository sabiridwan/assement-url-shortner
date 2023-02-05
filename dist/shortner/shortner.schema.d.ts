/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Types } from 'mongoose';
export type ShortnerDocument = Shortner & Document;
export declare class Shortner {
    _id: Types.ObjectId;
    url: string;
    shortUrl: string;
    name: string;
    createdAt: number;
}
export declare const ShortnerSchema: import("mongoose").Schema<Shortner, import("mongoose").Model<Shortner, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Shortner>;
export declare class PageParams {
    skip?: number;
    take?: number;
    keyword?: string;
}
export declare class PageResult<T> {
    totalRecords: number;
    data: Array<T>;
}
export declare const handlePageFacet: (page: PageParams) => {
    $facet: {
        data: ({
            $skip: number;
            $limit?: undefined;
        } | {
            $limit: number;
            $skip?: undefined;
        })[];
        totalRecords: {
            $count: string;
        }[];
    };
};
export declare const handlePageResult: (res: any) => any;
