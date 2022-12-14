import { Injectable } from '@nestjs/common';
import { PageParams, PageResult, Shortner } from './shortner.schema';
import { ShortnerRepository } from './shotner.repository';

@Injectable()
export class ShortnerService {
  constructor(private readonly shortnerRepository: ShortnerRepository) {}

  public async create(model: Shortner): Promise<Shortner> {
    model.shortUrl = model.url;
    return this.shortnerRepository.create(model);
  }

  public async update(model: Partial<Shortner>): Promise<Shortner> {
    if (model.url) model.shortUrl = model.url;
    return this.shortnerRepository.update(model._id, model);
  }

  public async delete(id: string): Promise<void> {
    this.shortnerRepository.delete(id);
  }

  public async find(model: Partial<Shortner>): Promise<Array<Shortner>> {
    return this.shortnerRepository.find(model);
  }

  public async findOne(model: Partial<Shortner>): Promise<Shortner> {
    return this.shortnerRepository.findOne(model);
  }

  public async page(page: PageParams): Promise<PageResult<Shortner>> {
    return this.shortnerRepository.page(page);
  }
}
