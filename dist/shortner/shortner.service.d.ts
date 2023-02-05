import { PageParams, PageResult, Shortner } from './shortner.schema';
import { ShortnerRepository } from './shotner.repository';
export declare class ShortnerService {
    private readonly shortnerRepository;
    constructor(shortnerRepository: ShortnerRepository);
    create(model: Shortner): Promise<Shortner>;
    update(model: Partial<Shortner>): Promise<Shortner>;
    delete(id: string): Promise<void>;
    find(model: Partial<Shortner>): Promise<Array<Shortner>>;
    findOne(model: Partial<Shortner>): Promise<Shortner>;
    page(page: PageParams): Promise<PageResult<Shortner>>;
}
