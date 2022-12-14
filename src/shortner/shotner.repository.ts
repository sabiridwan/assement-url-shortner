import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  handlePageFacet,
  handlePageResult,
  PageParams,
  PageResult,
  Shortner,
  ShortnerDocument,
} from './shortner.schema';

@Injectable()
export class ShortnerRepository {
  constructor(
    @InjectModel(Shortner.name)
    private shortnerModel: Model<ShortnerDocument>,
  ) {}

  public async create(model: Shortner): Promise<Shortner> {
    const createdActivity = new this.shortnerModel({
      ...model,
      createdAt: Date.now(),
    });
    return createdActivity.save();
  }

  public async update(
    id: Types.ObjectId | string,
    model: Partial<Shortner>,
  ): Promise<Shortner> {
    await this.shortnerModel.updateOne(
      { _id: id },
      {
        ...model,
        updatedAt: Date.now(),
      },
    );
    return this.findOne({ _id: id } as any);
  }

  public async delete(id: Types.ObjectId | string): Promise<void> {
    await this.shortnerModel.deleteOne({
      _id: new Types.ObjectId(id),
    });
  }

  public async find(query: Partial<Shortner>): Promise<Array<Shortner>> {
    return await this.shortnerModel.find(query);
  }

  public async findOne(query: Partial<Shortner>): Promise<Shortner> {
    if (query._id) query._id = new Types.ObjectId(query._id);

    return await this.shortnerModel.findOne(query);
  }

  public async page(page: PageParams): Promise<PageResult<Shortner>> {
    let query = {
      $match: {},
    } as any;

    return await this.shortnerModel
      .aggregate([query, { $sort: { name: 1 } }, { ...handlePageFacet(page) }])
      .then(handlePageResult);
  }
}
