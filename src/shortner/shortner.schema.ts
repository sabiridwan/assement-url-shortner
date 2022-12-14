import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type ShortnerDocument = Shortner & Document;

@Schema()
export class Shortner {
  _id: Types.ObjectId;
  @Prop()
  url: string;
  @Prop()
  shortUrl: string;
  @Prop()
  name: string;
  @Prop()
  createdAt: number;
}

export const ShortnerSchema = SchemaFactory.createForClass(Shortner);

export class PageParams {
  skip?: number;
  take?: number;
  keyword?: string;
}

export class PageResult<T> {
  totalRecords: number;
  data: Array<T>;
}

export const handlePageFacet = (page: PageParams) => {
  return {
    $facet: {
      data: [{ $skip: Number(page.skip) }, { $limit: Number(page.take) }],
      totalRecords: [{ $count: 'count' }],
    },
  };
};

export const handlePageResult = (res: any) => {
  let rs = res[0] as any;
  if (rs.totalRecords.length)
    rs = { ...rs, totalRecords: rs.totalRecords[0].count };
  else rs = { ...rs, totalRecords: 0 };

  return rs;
};
