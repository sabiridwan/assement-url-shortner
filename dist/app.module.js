"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const shortner_module_1 = require("./shortner/shortner.module");
const config_1 = require("./config");
const config_2 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shortner_module_1.ShortnerModule,
            config_2.ConfigModule.forRoot({
                envFilePath: ['.env'],
                load: [config_1.default],
            }),
            mongoose_1.MongooseModule.forRoot((0, config_1.default)().database.host),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                installSubscriptionHandlers: true,
                resolvers: {},
                cors: {
                    origin: true,
                    credentials: true,
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map