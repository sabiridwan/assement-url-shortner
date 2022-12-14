import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Shortner {
  @Field((type) => String)
  _id: string;
  @Field((type) => String)
  name: string;
  @Field((type) => String)
  url: string;
  @Field((type) => String)
  shortUrl: string;
  @Field((type) => Number)
  createdAt: number;
}

@InputType()
export class ShortnerCreateInput {
  @Field((type) => String)
  name: string;
  @Field((type) => String)
  url: string;
}

@InputType()
export class ShortnerUpdateInput {
  @Field((type) => String, { nullable: true })
  name: string;
  @Field((type) => String, { nullable: true })
  url: string;
}

@InputType()
export class ShortnerQueryInput {
  @Field((type) => String, { nullable: true })
  _id: string;
  @Field((type) => String, { nullable: true })
  url: string;
}

@InputType()
export class ShortnerPageInput {
  @Field((type) => Number)
  skip: number;
  @Field((type) => Number)
  take: number;
  @Field((type) => String, { nullable: true })
  kewyword: string;
}

@ObjectType()
export class ShortnerPageResult {
  @Field((type) => Number, { nullable: false })
  totalRecords: number;
  @Field((type) => [Shortner])
  data: [Shortner];
}
