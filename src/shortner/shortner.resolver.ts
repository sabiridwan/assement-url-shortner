import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  Shortner,
  ShortnerCreateInput,
  ShortnerPageInput,
  ShortnerPageResult,
  ShortnerQueryInput,
  ShortnerUpdateInput,
} from './shortner.dto';
import { ShortnerService } from './shortner.service';

@Resolver((of) => Shortner)
export class ShortnerResolver {
  constructor(private readonly shortnerSvc: ShortnerService) {}

  @Mutation((returns) => Shortner, { name: 'createUrl' })
  async create(
    @Args('url')
    url: ShortnerCreateInput,
  ) {
    return this.shortnerSvc.create(url as any);
  }

  @Mutation((returns) => Shortner, { name: 'updateUrl' })
  async update(
    @Args('url')
    url: ShortnerUpdateInput,
  ) {
    return this.shortnerSvc.update(url as any);
  }

  @Query((returns) => Boolean, { name: 'deleteUrl' })
  async delete(
    @Args('url')
    url: ShortnerUpdateInput,
  ) {
    await this.shortnerSvc.update(url as any);
    return true;
  }

  @Query((returns) => Shortner, { name: 'findOneUrl', nullable: true })
  async findOne(
    @Args('query')
    query: ShortnerQueryInput,
  ) {
    return this.shortnerSvc.findOne(query as any);
  }

  @Query((returns) => [Shortner], { name: 'findUrl' })
  async find(
    @Args('query')
    query: ShortnerQueryInput,
  ) {
    return this.shortnerSvc.find(query as any);
  }

  @Query((returns) => ShortnerPageResult, { name: 'urlPage' })
  async page(
    @Args('page')
    page: ShortnerPageInput,
  ) {
    return this.shortnerSvc.page(page as any);
  }
}
