import { ShortnerCreateInput, ShortnerPageInput, ShortnerQueryInput, ShortnerUpdateInput } from './shortner.dto';
import { ShortnerService } from './shortner.service';
export declare class ShortnerResolver {
    private readonly shortnerSvc;
    constructor(shortnerSvc: ShortnerService);
    create(url: ShortnerCreateInput): Promise<import("./shortner.schema").Shortner>;
    update(url: ShortnerUpdateInput): Promise<import("./shortner.schema").Shortner>;
    url(url: string): Promise<import("./shortner.schema").Shortner>;
    delete(url: ShortnerUpdateInput): Promise<boolean>;
    findOne(query: ShortnerQueryInput): Promise<import("./shortner.schema").Shortner>;
    find(query: ShortnerQueryInput): Promise<import("./shortner.schema").Shortner[]>;
    page(page: ShortnerPageInput): Promise<import("./shortner.schema").PageResult<import("./shortner.schema").Shortner>>;
}
