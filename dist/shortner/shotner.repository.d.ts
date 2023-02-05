import { Model, Types } from 'mongoose';
import { PageParams, PageResult, Shortner, ShortnerDocument } from './shortner.schema';
export declare class ShortnerRepository {
    private shortnerModel;
    constructor(shortnerModel: Model<ShortnerDocument>);
    create(model: Shortner): Promise<Shortner>;
    update(id: Types.ObjectId | string, model: Partial<Shortner>): Promise<Shortner>;
    delete(id: Types.ObjectId | string): Promise<void>;
    find(query: Partial<Shortner>): Promise<Array<Shortner>>;
    findOne(query: Partial<Shortner>): Promise<Shortner>;
    page(page: PageParams): Promise<PageResult<Shortner>>;
}
