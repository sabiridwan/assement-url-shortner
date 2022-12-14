import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortnerModule } from './shortner/shortner.module';
import configuration from './config';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ShortnerModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [configuration],
    }),
    MongooseModule.forRoot(configuration().database.host),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      resolvers: {},
      cors: {
        origin: true,
        credentials: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
