import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShortnerResolver } from './shortner.resolver';
import { Shortner, ShortnerSchema } from './shortner.schema';
import { ShortnerService } from './shortner.service';
import { ShortnerRepository } from './shotner.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Shortner.name, schema: ShortnerSchema },
    ]),
  ],
  providers: [ShortnerResolver, ShortnerService, ShortnerRepository],
  exports: [],
})
export class ShortnerModule {}
